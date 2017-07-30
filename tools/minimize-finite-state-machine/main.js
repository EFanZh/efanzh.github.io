"use strict";
class State {
}
class DfaState {
}
class Fsm {
    static from(jsonFsm) {
        const states = [];
        const nameToStateMap = new Map();
        for (const stateName in jsonFsm.states) {
            if (jsonFsm.states.hasOwnProperty(stateName)) {
                const state = {
                    isAccept: typeof jsonFsm.acceptStates === "string" ?
                        jsonFsm.acceptStates === stateName :
                        jsonFsm.acceptStates.includes(stateName),
                    isInitial: typeof jsonFsm.initialStates === "string" ?
                        jsonFsm.initialStates === stateName :
                        jsonFsm.initialStates.includes(stateName),
                    name: stateName,
                    nextStates: new Map()
                };
                states.push(state);
                nameToStateMap.set(state.name, state);
            }
        }
        for (const stateName in jsonFsm.states) {
            if (jsonFsm.states.hasOwnProperty(stateName)) {
                const jsonState = jsonFsm.states[stateName];
                const state = nameToStateMap.get(stateName);
                for (const input in jsonState) {
                    if (jsonState.hasOwnProperty(input)) {
                        const nextStates = [];
                        const jsonNextStates = jsonState[input];
                        if (typeof jsonNextStates === "string") {
                            nextStates.push(nameToStateMap.get(jsonNextStates));
                        }
                        else {
                            for (const nextState of jsonNextStates) {
                                nextStates.push(nameToStateMap.get(nextState));
                            }
                        }
                        if (input.length === 0) {
                            state.nextStates.set(epsilonInput, nextStates);
                        }
                        else {
                            state.nextStates.set(input, nextStates);
                        }
                    }
                }
            }
        }
        return { states };
    }
}
class Dfa {
    toJson() {
        let initialState;
        const acceptStates = [];
        const states = {};
        for (const state of this.states) {
            if (state.isInitial) {
                initialState = state.name;
            }
            if (state.isEnd) {
                acceptStates.push(state.name);
            }
            const transitions = {};
            for (const [input, nextState] of state.nextStates) {
                transitions[input] = nextState.name;
            }
            states[state.name] = transitions;
        }
        if (initialState === undefined) {
            throw new Error("No initial state.");
        }
        return { initialState, acceptStates, states };
    }
}
const epsilonInput = null;
// Collection tools.
function setDifference(set, otherSet) {
    const result = new Set();
    for (const item of set) {
        if (!otherSet.has(item)) {
            result.add(item);
        }
    }
    return result;
}
function setExtend(set, items) {
    for (const item of items) {
        set.add(item);
    }
}
function setFrom(items) {
    const result = new Set();
    for (const item of items) {
        result.add(item);
    }
    return result;
}
function setIntersection(set, otherSet) {
    const result = new Set();
    // Make sure set is the smaller one.
    if (set.size > otherSet.size) {
        const temp = set;
        set = otherSet;
        otherSet = temp;
    }
    for (const item of set) {
        if (otherSet.has(item)) {
            result.add(item);
        }
    }
    return result;
}
function mapGetOrCreate(map, key, valueConstructor) {
    let value = map.get(key);
    if (value === undefined) {
        value = new valueConstructor();
        map.set(key, value);
    }
    return value;
}
// Functional tools.
function all(source, predicate) {
    for (const item of source) {
        if (!predicate(item)) {
            return false;
        }
    }
    return true;
}
function any(source, predicate) {
    for (const item of source) {
        if (predicate(item)) {
            return true;
        }
    }
    return false;
}
function* enumerate(source) {
    let index = 0;
    for (const item of source) {
        yield [index, item];
        index++;
    }
}
function* filter(source, filter) {
    for (const item of source) {
        if (filter(item)) {
            yield item;
        }
    }
}
function* flatMap(source, f) {
    for (const item of source) {
        yield* f(item);
    }
}
// The actual work.
function* getEpsilonClosure(states) {
    const visited = new Set();
    const stack = [];
    for (const state of states) {
        if (!visited.has(state)) {
            visited.add(state);
            yield state;
            let currentState = state;
            do {
                const nextStates = currentState.nextStates.get(epsilonInput);
                if (nextStates !== undefined) {
                    for (const nextState of nextStates) {
                        if (!visited.has(nextState)) {
                            visited.add(nextState);
                            yield nextState;
                            stack.push(nextState);
                        }
                    }
                }
                currentState = stack.pop();
            } while (currentState !== undefined);
        }
    }
}
function setEquals(lhs, rhs) {
    return lhs.size === rhs.size && all(lhs, (value) => rhs.has(value));
}
function fsmToDfa(states) {
    const dfaTransitions = new Map();
    const stack = [];
    const dfaInitialState = setFrom(filter(states, (values) => values.isInitial));
    function getOrCreateDfaState(stateSet) {
        for (const key of dfaTransitions.keys()) {
            if (setEquals(key, stateSet)) {
                return [false, key];
            }
        }
        dfaTransitions.set(stateSet, new Map());
        return [true, stateSet];
    }
    dfaTransitions.set(dfaInitialState, new Map());
    let currentStateSet = dfaInitialState;
    do {
        const nextStateSets = new Map();
        for (const state of currentStateSet) {
            for (const [input, nextStates] of state.nextStates) {
                if (input !== null) {
                    const nextStateSet = mapGetOrCreate(nextStateSets, input, Set);
                    for (const nextState of getEpsilonClosure(nextStates)) {
                        nextStateSet.add(nextState);
                    }
                }
            }
        }
        const dfaTransition = dfaTransitions.get(currentStateSet);
        for (const [input, nextStateSet] of nextStateSets) {
            const [created, dfaState] = getOrCreateDfaState(nextStateSet);
            dfaTransition.set(input, dfaState);
            if (created) {
                stack.push(dfaState);
            }
        }
        currentStateSet = stack.pop();
    } while (currentStateSet !== undefined);
    return dfaTransitions;
}
function minimizeFsm(fsm) {
    const dfaTransitions = fsmToDfa(fsm.states);
    const reverseTransitions = new Map();
    for (const [dfaState, transition] of dfaTransitions) {
        for (const [input, targetDfaState] of transition) {
            const targetState = mapGetOrCreate(reverseTransitions, targetDfaState, Map);
            mapGetOrCreate(targetState, input, Array).push(dfaState);
        }
    }
    // Now we’ve got a DFA with state sets as state, minimize it.
    // From https://en.wikipedia.org/wiki/DFA_minimization#Hopcroft.27s_algorithm.
    //
    // P := {F, Q \ F};
    // W := {F};
    // while (W is not empty) do
    //      choose and remove a set A from W
    //      for each c in Σ do
    //           let X be the set of states for which a transition on c leads to a state in A
    //           for each set Y in P for which X ∩ Y is nonempty and Y \ X is nonempty do
    //                replace Y in P by the two sets X ∩ Y and Y \ X
    //                if Y is in W
    //                     replace Y in W by the same two sets
    //                else
    //                     if |X ∩ Y| <= |Y \ X|
    //                          add X ∩ Y to W
    //                     else
    //                          add Y \ X to W
    //           end;
    //      end;
    // end;
    const sigma = setFrom(flatMap(dfaTransitions, (value) => value[1].keys()));
    const f = setFrom(filter(dfaTransitions.keys(), (stateSet) => any(stateSet, (item) => item.isAccept)));
    const notF = setFrom(filter(dfaTransitions.keys(), (stateSet) => !f.has(stateSet)));
    const p = [f, notF];
    const w = [];
    let a = f;
    do {
        for (const c of sigma) {
            const x = new Set();
            for (const dfaState of a) {
                const previousTransitions = reverseTransitions.get(dfaState);
                if (previousTransitions !== undefined) {
                    const previousStates = previousTransitions.get(c);
                    if (previousStates !== undefined) {
                        setExtend(x, previousStates);
                    }
                }
            }
            for (let i = 0; i < p.length; void (0)) {
                const y = p[i];
                const intersection = setIntersection(x, y);
                if (intersection.size > 0) {
                    const difference = setDifference(y, x);
                    if (difference.size > 0) {
                        // Replace Y in P by the two sets X ∩ Y and Y \ X.
                        p[i] = intersection;
                        p.push(difference);
                        const yIndexInW = w.indexOf(y);
                        if (yIndexInW !== -1) {
                            w[yIndexInW] = intersection;
                            w.push(difference);
                        }
                        else if (intersection.size <= difference.size) {
                            w.push(intersection);
                        }
                        else {
                            w.push(difference);
                        }
                        continue; // Without increasing i.
                    }
                }
                i++;
            }
        }
        a = w.pop();
    } while (a !== undefined);
    // Now we construct the minimized DFA.
    const dfaStates = [];
    const stateSetToDfaState = new Map();
    for (const [index, stateGroup] of enumerate(p)) {
        const dfaState = {
            isEnd: any(flatMap(stateGroup, (state) => state), (state) => state.isAccept),
            isInitial: any(flatMap(stateGroup, (state) => state), (state) => state.isInitial),
            name: index.toString(),
            nextStates: new Map(),
            oldStates: Array.from(stateGroup)
        };
        for (const stateSet of stateGroup) {
            stateSetToDfaState.set(stateSet, dfaState);
        }
        dfaStates.push(dfaState);
    }
    for (const dfaState of dfaStates) {
        for (const stateSet of dfaState.oldStates) {
            const transition = dfaTransitions.get(stateSet);
            if (transition !== undefined) {
                for (const [input, target] of transition) {
                    dfaState.nextStates.set(input, stateSetToDfaState.get(target));
                }
            }
        }
    }
    const result = new Dfa();
    result.states = dfaStates;
    return result;
}
// Scripting time.
document.addEventListener("DOMContentLoaded", () => {
    function $(selector) {
        return document.querySelector(selector);
    }
    const minimizeButton = $("#minimize-button");
    const nfaInput = $("#nfa-input");
    const dfaOutput = $("#dfa-output");
    minimizeButton.addEventListener("click", () => {
        const jsonInput = JSON.parse(nfaInput.value);
        nfaInput.value = JSON.stringify(jsonInput, null, 4);
        const fsmValue = Fsm.from(jsonInput);
        const dfa = minimizeFsm(fsmValue);
        dfaOutput.value = JSON.stringify(dfa.toJson(), null, 4);
    });
});
