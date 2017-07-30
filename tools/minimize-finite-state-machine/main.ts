type EmptyInput = null;
type StringInput = string;
type Input = EmptyInput | StringInput;

class State
{
    public name: string;
    public isInitial: boolean;
    public isAccept: boolean;
    public nextStates: Map<Input, State[]>;
}

class DfaState
{
    public name: string;
    public isInitial: boolean;
    public isEnd: boolean;
    public nextStates: Map<StringInput, DfaState>;
    public oldStates: Array<Set<State>>;
}

interface IJsonFsm
{
    initialStates: string | string[];
    acceptStates: string | string[];
    states: {
        [index: string]: {
            [index: string]: string | string[];
        }
    };
}

interface IJsonDfaStates
{
    [index: string]: {
        [index: string]: string;
    };
}

interface IJsonDfa
{
    initialState: string;
    acceptStates: string | string[];
    states: IJsonDfaStates;
}

class Fsm
{
    public static from(jsonFsm: IJsonFsm): Fsm
    {
        const states = [] as State[];
        const nameToStateMap = new Map<string, State>();

        for (const stateName in jsonFsm.states)
        {
            if (jsonFsm.states.hasOwnProperty(stateName))
            {
                const state: State = {
                    isAccept: typeof jsonFsm.acceptStates === "string" ?
                        jsonFsm.acceptStates === stateName :
                        jsonFsm.acceptStates.includes(stateName),
                    isInitial: typeof jsonFsm.initialStates === "string" ?
                        jsonFsm.initialStates === stateName :
                        jsonFsm.initialStates.includes(stateName),
                    name: stateName,
                    nextStates: new Map<Input, State[]>()
                };

                states.push(state);

                nameToStateMap.set(state.name, state);
            }
        }

        for (const stateName in jsonFsm.states)
        {
            if (jsonFsm.states.hasOwnProperty(stateName))
            {
                const jsonState = jsonFsm.states[stateName];
                const state = nameToStateMap.get(stateName) as State;

                for (const input in jsonState)
                {
                    if (jsonState.hasOwnProperty(input))
                    {
                        const nextStates = [] as State[];
                        const jsonNextStates = jsonState[input];

                        if (typeof jsonNextStates === "string")
                        {
                            nextStates.push(nameToStateMap.get(jsonNextStates) as State);
                        }
                        else
                        {
                            for (const nextState of jsonNextStates)
                            {
                                nextStates.push(nameToStateMap.get(nextState) as State);
                            }
                        }

                        if (input.length === 0)
                        {
                            state.nextStates.set(epsilonInput, nextStates);
                        }
                        else
                        {
                            state.nextStates.set(input, nextStates);
                        }
                    }
                }
            }
        }

        return { states };
    }

    public states: State[];
}

class Dfa
{
    public states: DfaState[];

    public toJson(): IJsonDfa
    {
        let initialState: string | undefined;
        const acceptStates = [] as string[];
        const states: IJsonDfaStates = {};

        for (const state of this.states)
        {
            if (state.isInitial)
            {
                initialState = state.name;
            }

            if (state.isEnd)
            {
                acceptStates.push(state.name);
            }

            const transitions: { [index: string]: string; } = {};

            for (const [input, nextState] of state.nextStates)
            {
                transitions[input] = nextState.name;
            }

            states[state.name] = transitions;
        }

        if (initialState === undefined)
        {
            throw new Error("No initial state.");
        }

        return { initialState, acceptStates, states };
    }
}

const epsilonInput = null;

// Collection tools.

function setDifference<T>(set: Set<T>, otherSet: Set<T>)
{
    const result = new Set<T>();

    for (const item of set)
    {
        if (!otherSet.has(item))
        {
            result.add(item);
        }
    }

    return result;
}

function setExtend<T>(set: Set<T>, items: Iterable<T>)
{
    for (const item of items)
    {
        set.add(item);
    }
}

function setFrom<T>(items: Iterable<T>): Set<T>
{
    const result = new Set<T>();

    for (const item of items)
    {
        result.add(item);
    }

    return result;
}

function setIntersection<T>(set: Set<T>, otherSet: Set<T>)
{
    const result = new Set<T>();

    // Make sure set is the smaller one.

    if (set.size > otherSet.size)
    {
        const temp = set;

        set = otherSet;
        otherSet = temp;
    }

    for (const item of set)
    {
        if (otherSet.has(item))
        {
            result.add(item);
        }
    }

    return result;
}

function mapGetOrCreate<K, V>(map: Map<K, V>, key: K, valueConstructor: new () => V): V
{
    let value = map.get(key);

    if (value === undefined)
    {
        value = new valueConstructor();

        map.set(key, value);
    }

    return value;
}

// Functional tools.

function all<T>(source: Iterable<T>, predicate: (value: T) => boolean): boolean
{
    for (const item of source)
    {
        if (!predicate(item))
        {
            return false;
        }
    }

    return true;
}

function any<T>(source: Iterable<T>, predicate: (value: T) => boolean): boolean
{
    for (const item of source)
    {
        if (predicate(item))
        {
            return true;
        }
    }

    return false;
}

function* enumerate<T>(source: Iterable<T>): IterableIterator<[number, T]>
{
    let index = 0;

    for (const item of source)
    {
        yield [index, item];

        index++;
    }
}

function* filter<T>(source: Iterable<T>, filter: (value: T) => boolean): IterableIterator<T>
{
    for (const item of source)
    {
        if (filter(item))
        {
            yield item;
        }
    }
}

function* flatMap<T, U>(source: Iterable<T>, f: (value: T) => Iterable<U>): IterableIterator<U>
{
    for (const item of source)
    {
        yield* f(item);
    }
}

// The actual work.

function* getEpsilonClosure(states: State[]): IterableIterator<State>
{
    const visited = new Set<State>();
    const stack = [] as State[];

    for (const state of states)
    {
        if (!visited.has(state))
        {
            visited.add(state);

            yield state;

            let currentState: State | undefined = state;

            do
            {
                const nextStates = currentState.nextStates.get(epsilonInput);

                if (nextStates !== undefined)
                {
                    for (const nextState of nextStates)
                    {
                        if (!visited.has(nextState))
                        {
                            visited.add(nextState);

                            yield nextState;

                            stack.push(nextState);
                        }
                    }
                }

                currentState = stack.pop();
            }
            while (currentState !== undefined);
        }
    }
}

function setEquals<T>(lhs: Set<T>, rhs: Set<T>)
{
    return lhs.size === rhs.size && all(lhs, (value) => rhs.has(value));
}

function fsmToDfa(states: State[]): Map<Set<State>, Map<StringInput, Set<State>>>
{
    const dfaTransitions = new Map<Set<State>, Map<StringInput, Set<State>>>();
    const stack = [] as Array<Set<State>>;
    const dfaInitialState = setFrom(filter(states, (values) => values.isInitial));

    function getOrCreateDfaState(stateSet: Set<State>): [boolean, Set<State>]
    {
        for (const key of dfaTransitions.keys())
        {
            if (setEquals(key, stateSet))
            {
                return [false, key];
            }
        }

        dfaTransitions.set(stateSet, new Map());

        return [true, stateSet];
    }

    dfaTransitions.set(dfaInitialState, new Map());

    let currentStateSet: Set<State> | undefined = dfaInitialState;

    do
    {
        const nextStateSets = new Map<StringInput, Set<State>>();

        for (const state of currentStateSet)
        {
            for (const [input, nextStates] of state.nextStates)
            {
                if (input !== null)
                {
                    const nextStateSet = mapGetOrCreate<StringInput, Set<State>>(nextStateSets, input, Set);

                    for (const nextState of getEpsilonClosure(nextStates))
                    {
                        nextStateSet.add(nextState);
                    }
                }
            }
        }

        const dfaTransition = dfaTransitions.get(currentStateSet) as Map<StringInput, Set<State>>;

        for (const [input, nextStateSet] of nextStateSets)
        {
            const [created, dfaState] = getOrCreateDfaState(nextStateSet);

            dfaTransition.set(input, dfaState);

            if (created)
            {
                stack.push(dfaState);
            }
        }

        currentStateSet = stack.pop();
    }
    while (currentStateSet !== undefined);

    return dfaTransitions;
}

function minimizeFsm(fsm: Fsm): Dfa
{
    const dfaTransitions = fsmToDfa(fsm.states);
    const reverseTransitions = new Map<Set<State>, Map<StringInput, Array<Set<State>>>>();

    for (const [dfaState, transition] of dfaTransitions)
    {
        for (const [input, targetDfaState] of transition)
        {
            const targetState = mapGetOrCreate<Set<State>, Map<StringInput, Array<Set<State>>>>(reverseTransitions,
                targetDfaState,
                Map);

            mapGetOrCreate<StringInput, Array<Set<State>>>(targetState, input, Array).push(dfaState);
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
    const w = [] as Array<Set<Set<State>>>;
    let a: Set<Set<State>> | undefined = f;

    do
    {
        for (const c of sigma)
        {
            const x = new Set<Set<State>>();

            for (const dfaState of a)
            {
                const previousTransitions = reverseTransitions.get(dfaState);

                if (previousTransitions !== undefined)
                {
                    const previousStates = previousTransitions.get(c);

                    if (previousStates !== undefined)
                    {
                        setExtend(x, previousStates);
                    }
                }
            }

            for (let i = 0; i < p.length; void (0))
            {
                const y = p[i];
                const intersection = setIntersection(x, y);

                if (intersection.size > 0)
                {
                    const difference = setDifference(y, x);

                    if (difference.size > 0)
                    {
                        // Replace Y in P by the two sets X ∩ Y and Y \ X.
                        p[i] = intersection;
                        p.push(difference);

                        const yIndexInW = w.indexOf(y);

                        if (yIndexInW !== -1)
                        {
                            w[yIndexInW] = intersection;
                            w.push(difference);
                        }
                        else if (intersection.size <= difference.size)
                        {
                            w.push(intersection);
                        }
                        else
                        {
                            w.push(difference);
                        }

                        continue; // Without increasing i.
                    }
                }

                i++;
            }
        }

        a = w.pop();
    }
    while (a !== undefined);

    // Now we construct the minimized DFA.

    const dfaStates = [] as DfaState[];
    const stateSetToDfaState = new Map<Set<State>, DfaState>();

    for (const [index, stateGroup] of enumerate(p))
    {
        const dfaState: DfaState = {
            isEnd: any(flatMap(stateGroup, (state) => state), (state) => state.isAccept),
            isInitial: any(flatMap(stateGroup, (state) => state), (state) => state.isInitial),
            name: index.toString(),
            nextStates: new Map<StringInput, DfaState>(),
            oldStates: Array.from(stateGroup)
        };

        for (const stateSet of stateGroup)
        {
            stateSetToDfaState.set(stateSet, dfaState);
        }

        dfaStates.push(dfaState);
    }

    for (const dfaState of dfaStates)
    {
        for (const stateSet of dfaState.oldStates)
        {
            const transition = dfaTransitions.get(stateSet);

            if (transition !== undefined)
            {
                for (const [input, target] of transition)
                {
                    dfaState.nextStates.set(input, stateSetToDfaState.get(target) as DfaState);
                }
            }
        }
    }

    const result = new Dfa();

    result.states = dfaStates;

    return result;
}

// Scripting time.

document.addEventListener("DOMContentLoaded", () =>
{
    function $(selector: string): Element | null
    {
        return document.querySelector(selector);
    }

    const minimizeButton = $("#minimize-button") as HTMLButtonElement;
    const nfaInput = $("#nfa-input") as HTMLTextAreaElement;
    const dfaOutput = $("#dfa-output") as HTMLTextAreaElement;

    minimizeButton.addEventListener("click", () =>
    {
        const jsonInput = JSON.parse(nfaInput.value);

        nfaInput.value = JSON.stringify(jsonInput, null, 4);

        const fsmValue = Fsm.from(jsonInput as IJsonFsm);
        const dfa = minimizeFsm(fsmValue);

        dfaOutput.value = JSON.stringify(dfa.toJson(), null, 4);
    });
});
