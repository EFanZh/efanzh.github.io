export class Position {
}
export class Size {
}
export class Child {
}
export class Tree {
}
class PositionedTreeChild {
}
class PositionedTree {
}
class LayoutBox {
}
class Configuration {
}
function offsetLayoutBoxes(layoutBoxes, offset) {
    for (const layoutBox of layoutBoxes) {
        layoutBox.from += offset;
        layoutBox.to += offset;
    }
}
function layoutTreeWithLabel(child, nodePaddingX, spacing, asciiMode) {
    const layoutBoxes = [];
    if (child.label === null) {
        layoutBoxes.push({ from: 0, to: 0 });
    }
    else {
        if (asciiMode) {
            const halfLabelWidth = child.labelSize.width / 2;
            const leftWidth = Math.ceil(halfLabelWidth) - 0.5;
            const rightWidth = child.labelSize.width - leftWidth;
            layoutBoxes.push({ from: -leftWidth, to: rightWidth });
            child.labelOffsetX = halfLabelWidth - leftWidth;
        }
        else {
            const halfLabelWidth = child.labelSize.width / 2;
            layoutBoxes.push({ from: -halfLabelWidth, to: halfLabelWidth });
        }
    }
    layoutBoxes.push(...layoutTree(child.tree, nodePaddingX, spacing, asciiMode));
    return layoutBoxes;
}
function stackLayoutBoxes(offsets, left, right, spacing) {
    const effectiveSize = Math.min(left.length, right.length);
    // Calculate the minimum distance between two sub-trees.
    let minDistance = Number.MAX_VALUE;
    for (let i = 0; i < effectiveSize; i++) {
        const distance = right[i].from - left[i].to;
        minDistance = Math.min(minDistance, distance);
    }
    // Calculate the offset of the new sub-tree.
    const offset = spacing - minDistance;
    offsets.push(offset);
    // Extend right boundary of the common part.
    for (let i = 0; i < effectiveSize; i++) {
        left[i].to = offset + right[i].to;
    }
    // If the new sub-tree is deeper than the existing forest, extend the depth of the forest.
    if (left.length < right.length) {
        for (let i = left.length; i < right.length; i++) {
            left.push({ from: offset + right[i].from, to: offset + right[i].to });
        }
    }
}
function layoutTree(tree, nodePaddingX, spacing, asciiMode) {
    let layoutBoxes;
    if (asciiMode) {
        const nodeWidth = (tree.textSize.width + nodePaddingX * 2);
        const halfNodeWidth = nodeWidth / 2;
        const leftSize = Math.floor(halfNodeWidth);
        layoutBoxes = [{ from: -leftSize, to: nodeWidth - leftSize }];
        tree.nodeOffsetX = halfNodeWidth - leftSize;
    }
    else {
        const halfNodeWidth = tree.textSize.width / 2 + nodePaddingX;
        layoutBoxes = [{ from: -halfNodeWidth, to: halfNodeWidth }];
    }
    const childOffsets = [0];
    if (tree.children.length > 0) {
        const childLayoutBoxes = layoutTreeWithLabel(tree.children[0], nodePaddingX, spacing, asciiMode);
        for (let i = 1; i < tree.children.length; i++) {
            const childLayout = layoutTreeWithLabel(tree.children[i], nodePaddingX, spacing, asciiMode);
            stackLayoutBoxes(childOffsets, childLayoutBoxes, childLayout, spacing);
        }
        let offset = (childOffsets[0] + childOffsets[childOffsets.length - 1]) / 2;
        if (asciiMode) {
            offset = Math.floor(offset);
        }
        offsetLayoutBoxes(childLayoutBoxes, -offset);
        layoutBoxes.push(...childLayoutBoxes);
        for (let i = 0; i < tree.children.length; i++) {
            tree.children[i].offsetX = childOffsets[i] - offset;
        }
    }
    return layoutBoxes;
}
function prepareWorkspace(configuration, canvasContext, tree) {
    function getLayoutTreeInfo(node) {
        const textSize = canvasContext.measureText(node.name);
        const children = [];
        let maxNodeTextHeight = textSize.height;
        let maxLabelTextHeight = 0;
        for (const child of node.children) {
            let labelSize;
            if (child.label !== null) {
                labelSize = canvasContext.measureText(child.label);
                maxLabelTextHeight = Math.max(maxLabelTextHeight, labelSize.height);
            }
            else {
                labelSize = { width: 0, height: 0 };
            }
            const childInfo = getLayoutTreeInfo(child.tree);
            maxNodeTextHeight = Math.max(maxNodeTextHeight, childInfo.maxNodeTextHeight);
            maxLabelTextHeight = Math.max(maxLabelTextHeight, childInfo.maxLabelTextHeight);
            children.push({ label: child.label, labelOffsetX: 0, labelSize, offsetX: 0, tree: childInfo.layoutTree });
        }
        return {
            layoutTree: { tree: node, textSize, children, nodeOffsetX: 0 },
            maxLabelTextHeight,
            maxNodeTextHeight
        };
    }
    return getLayoutTreeInfo(tree);
}
export function drawTreeGraph(configuration, canvasContext, tree) {
    const layoutTreeInfo = prepareWorkspace(configuration, canvasContext, tree);
    layoutTree(layoutTreeInfo.layoutTree, configuration.nodePaddingX, configuration.spacing, configuration.asciiMode);
    function getLeftBoundary(node) {
        const halfNodeWidth = node.textSize.width / 2 + configuration.nodePaddingX;
        let leftBoundary = -halfNodeWidth + node.nodeOffsetX;
        if (node.children.length > 0) {
            const child = node.children[0];
            leftBoundary = Math.min(leftBoundary, child.offsetX - child.labelSize.width / 2 + child.labelOffsetX);
        }
        for (const child of node.children) {
            leftBoundary = Math.min(leftBoundary, child.offsetX + getLeftBoundary(child.tree));
        }
        return leftBoundary;
    }
    const leftBoundary = getLeftBoundary(layoutTreeInfo.layoutTree);
    const nodeHeight = layoutTreeInfo.maxNodeTextHeight + configuration.nodePaddingY * 2;
    const totalBranchLength2 = configuration.branchLength2 + layoutTreeInfo.maxLabelTextHeight;
    const totalBranchLength = configuration.branchLength1 + totalBranchLength2;
    function drawNode(node, position) {
        const nodeWidth = node.textSize.width + configuration.nodePaddingX * 2;
        canvasContext.drawRectangle({ x: position.x - nodeWidth / 2 + node.nodeOffsetX, y: position.y }, { width: nodeWidth, height: nodeHeight });
        canvasContext.drawText(node.tree.name, { x: position.x + node.nodeOffsetX, y: position.y + nodeHeight / 2 });
    }
    function drawTree(node, position) {
        drawNode(node, position);
        const nodeBottom = position.y + nodeHeight;
        const horizontalLineY = nodeBottom + configuration.branchLength1;
        const labelPositionY = horizontalLineY + totalBranchLength2 / 2;
        const childrenTop = nodeBottom + totalBranchLength;
        if (node.children.length === 1) {
            const child = node.children[0];
            if (child.label === null) {
                // Draw the vertical line from parent to child.
                canvasContext.drawLines({ x: position.x, y: nodeBottom }, { x: position.x, y: childrenTop });
            }
            else {
                // Draw the vertical line from parent to label.
                canvasContext.drawLines({ x: position.x, y: nodeBottom }, { x: position.x, y: labelPositionY - child.labelSize.height / 2 });
                // Draw label.
                canvasContext.drawText(child.label, { x: position.x, y: labelPositionY });
                // Draw the vertical line from label to child.
                canvasContext.drawLines({ x: position.x, y: labelPositionY + child.labelSize.height / 2 }, { x: position.x, y: childrenTop });
            }
        }
        else if (node.children.length > 1) {
            // Draw the vertical line from parent to the horizontal line.
            canvasContext.drawLines({ x: position.x, y: nodeBottom }, { x: position.x, y: horizontalLineY });
            const firstChild = node.children[0];
            const lastChild = node.children[node.children.length - 1];
            const firstChildPositionX = position.x + firstChild.offsetX;
            const lastChildPositionX = position.x + lastChild.offsetX;
            let startY;
            let endY;
            if (firstChild.label === null) {
                startY = childrenTop;
            }
            else {
                startY = labelPositionY - firstChild.labelSize.height / 2;
            }
            if (lastChild.label === null) {
                endY = childrenTop;
            }
            else {
                endY = labelPositionY - lastChild.labelSize.height / 2;
            }
            // Draw lines from the first child’s label to the last child’s label.
            canvasContext.drawLines({ x: firstChildPositionX, y: startY }, { x: firstChildPositionX, y: horizontalLineY }, { x: lastChildPositionX, y: horizontalLineY }, { x: lastChildPositionX, y: endY });
            for (let i = 1; i < node.children.length - 1; i++) {
                const child = node.children[i];
                const childPositionX = position.x + child.offsetX;
                if (child.label === null) {
                    // Draw the vertical line from horizontal line to child.
                    canvasContext.drawLines({ x: position.x + child.offsetX, y: horizontalLineY }, { x: position.x + child.offsetX, y: childrenTop });
                }
                else {
                    // Draw the vertical line from horizontal line to label.
                    canvasContext.drawLines({ x: position.x + child.offsetX, y: horizontalLineY }, {
                        x: position.x + child.offsetX,
                        y: labelPositionY - child.labelSize.height / 2
                    });
                }
            }
        }
        for (const child of node.children) {
            const childPositionX = position.x + child.offsetX;
            if (child.label !== null) {
                // Draw the label
                canvasContext.drawText(child.label, { x: position.x + child.offsetX + child.labelOffsetX, y: labelPositionY });
                // Draw the vertical line from label to child.
                if (configuration.asciiMode && (child.labelSize.height % 2 !== layoutTreeInfo.maxLabelTextHeight % 2)) {
                    canvasContext.drawLines({ x: childPositionX, y: labelPositionY + child.labelSize.height / 2 - 0.5 }, { x: childPositionX, y: childrenTop });
                }
                else {
                    canvasContext.drawLines({ x: childPositionX, y: labelPositionY + child.labelSize.height / 2 }, { x: childPositionX, y: childrenTop });
                }
            }
            // Draw child nodes.
            drawTree(child.tree, { x: childPositionX, y: childrenTop });
        }
    }
    if (configuration.asciiMode) {
        if (Number.isInteger(leftBoundary)) {
            drawTree(layoutTreeInfo.layoutTree, { x: -leftBoundary + 0.5, y: 0.5 });
        }
        else {
            drawTree(layoutTreeInfo.layoutTree, { x: -leftBoundary, y: 0.5 });
        }
    }
    else {
        drawTree(layoutTreeInfo.layoutTree, { x: -leftBoundary, y: 0 });
    }
}
