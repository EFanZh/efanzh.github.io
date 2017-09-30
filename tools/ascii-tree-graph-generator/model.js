import * as layoutEngine from "./layout-engine.js";
import * as textBackend from "./text-backend.js";
function makeLayoutEngineTree(tree) {
    const children = [];
    if (tree.children !== undefined) {
        for (const child of tree.children) {
            children.push({
                label: child.label === undefined ? null : child.label,
                tree: makeLayoutEngineTree(child)
            });
        }
    }
    return { name: tree.name, children };
}
document.addEventListener("DOMContentLoaded", () => {
    const configuration = {
        asciiMode: true,
        branchLength1: 1,
        branchLength2: 1,
        nodePaddingX: 1.5,
        nodePaddingY: 0.5,
        spacing: 3,
    };
    const inputElement = document.querySelector("#input");
    const outputElement = document.querySelector("#output");
    function updateResult() {
        try {
            const context = new textBackend.AsciiTextCanvasContext();
            const input = JSON.parse(inputElement.value);
            const tree = makeLayoutEngineTree(input);
            layoutEngine.drawTreeGraph(configuration, context, tree);
            outputElement.value = context.render();
        }
        catch (e) {
            outputElement.value = e.toString();
        }
    }
    inputElement.oninput = updateResult;
    updateResult();
});
