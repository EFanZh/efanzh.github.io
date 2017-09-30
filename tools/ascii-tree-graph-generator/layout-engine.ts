export class Position
{
    public x: number;
    public y: number;
}

export class Size
{
    public width: number;
    public height: number;
}

export interface CanvasContext
{
    drawLines(...positions: Position[]): void;
    drawRectangle(position: Position, size: Size): void;
    drawText(text: string, position: Position): void;
    measureText(text: string): Size;
}

export class Child
{
    public label: string | null;
    public tree: Tree;
}

export class Tree
{
    public name: string;
    public children: Child[];
}

class PositionedTreeChild
{
    public label: string | null;
    public tree: PositionedTree;
    public labelSize: Size;
    public offsetX: number;
    public labelOffsetX: number;
}

class PositionedTree
{
    public tree: Tree;
    public children: PositionedTreeChild[];
    public textSize: Size;
    public nodeOffsetX: number;
}

class LayoutBox
{
    public from: number;
    public to: number;
}

class Configuration
{
    public asciiMode: boolean;
    public nodePaddingX: number;
    public nodePaddingY: number;
    public spacing: number;
    public branchLength1: number;
    public branchLength2: number;
}

function offsetLayoutBoxes(layoutBoxes: LayoutBox[], offset: number)
{
    for (const layoutBox of layoutBoxes)
    {
        layoutBox.from += offset;
        layoutBox.to += offset;
    }
}

function layoutTreeWithLabel(
    child: PositionedTreeChild,
    nodePaddingX: number,
    spacing: number,
    asciiMode: boolean): LayoutBox[]
{
    const layoutBoxes = [] as LayoutBox[];

    if (child.label === null)
    {
        layoutBoxes.push({ from: 0, to: 0 });
    }
    else
    {
        if (asciiMode)
        {
            const halfLabelWidth = child.labelSize.width / 2;
            const leftWidth = Math.ceil(halfLabelWidth) - 0.5;
            const rightWidth = child.labelSize.width - leftWidth;

            layoutBoxes.push({ from: -leftWidth, to: rightWidth });

            child.labelOffsetX = halfLabelWidth - leftWidth;
        }
        else
        {
            const halfLabelWidth = child.labelSize.width / 2;

            layoutBoxes.push({ from: -halfLabelWidth, to: halfLabelWidth });
        }
    }

    layoutBoxes.push(...layoutTree(child.tree, nodePaddingX, spacing, asciiMode));

    return layoutBoxes;
}

function stackLayoutBoxes(offsets: number[], left: LayoutBox[], right: LayoutBox[], spacing: number): void
{
    const effectiveSize = Math.min(left.length, right.length);

    // Calculate the minimum distance between two sub-trees.

    let minDistance = Number.MAX_VALUE;

    for (let i = 0; i < effectiveSize; i++)
    {
        const distance = right[i].from - left[i].to;

        minDistance = Math.min(minDistance, distance);
    }

    // Calculate the offset of the new sub-tree.

    const offset = spacing - minDistance;

    offsets.push(offset);

    // Extend right boundary of the common part.

    for (let i = 0; i < effectiveSize; i++)
    {
        left[i].to = offset + right[i].to;
    }

    // If the new sub-tree is deeper than the existing forest, extend the depth of the forest.

    if (left.length < right.length)
    {
        for (let i = left.length; i < right.length; i++)
        {
            left.push({ from: offset + right[i].from, to: offset + right[i].to });
        }
    }
}

function layoutTree(tree: PositionedTree, nodePaddingX: number, spacing: number, asciiMode: boolean): LayoutBox[]
{
    let layoutBoxes: LayoutBox[];

    if (asciiMode)
    {
        const nodeWidth = (tree.textSize.width + nodePaddingX * 2);
        const halfNodeWidth = nodeWidth / 2;
        const leftSize = Math.floor(halfNodeWidth);

        layoutBoxes = [{ from: -leftSize, to: nodeWidth - leftSize }];

        tree.nodeOffsetX = halfNodeWidth - leftSize;
    }
    else
    {
        const halfNodeWidth = tree.textSize.width / 2 + nodePaddingX;

        layoutBoxes = [{ from: -halfNodeWidth, to: halfNodeWidth }];
    }

    const childOffsets = [0];

    if (tree.children.length > 0)
    {
        const childLayoutBoxes = layoutTreeWithLabel(tree.children[0], nodePaddingX, spacing, asciiMode);

        for (let i = 1; i < tree.children.length; i++)
        {
            const childLayout = layoutTreeWithLabel(tree.children[i], nodePaddingX, spacing, asciiMode);

            stackLayoutBoxes(childOffsets, childLayoutBoxes, childLayout, spacing);
        }

        let offset = (childOffsets[0] + childOffsets[childOffsets.length - 1]) / 2;

        if (asciiMode)
        {
            offset = Math.floor(offset);
        }

        offsetLayoutBoxes(childLayoutBoxes, -offset);

        layoutBoxes.push(...childLayoutBoxes);

        for (let i = 0; i < tree.children.length; i++)
        {
            tree.children[i].offsetX = childOffsets[i] - offset;
        }
    }

    return layoutBoxes;
}

interface LayoutTreeInfo
{
    layoutTree: PositionedTree;
    maxNodeTextHeight: number;
    maxLabelTextHeight: number;
}

function prepareWorkspace(configuration: Configuration, canvasContext: CanvasContext, tree: Tree): LayoutTreeInfo
{
    function getLayoutTreeInfo(node: Tree): LayoutTreeInfo
    {
        const textSize = canvasContext.measureText(node.name);
        const children = [] as PositionedTreeChild[];
        let maxNodeTextHeight = textSize.height;
        let maxLabelTextHeight = 0;

        for (const child of node.children)
        {
            let labelSize;

            if (child.label !== null)
            {
                labelSize = canvasContext.measureText(child.label);
                maxLabelTextHeight = Math.max(maxLabelTextHeight, labelSize.height);
            }
            else
            {
                labelSize = { width: 0, height: 0 };
            }

            const childInfo = getLayoutTreeInfo(child.tree);

            maxNodeTextHeight = Math.max(maxNodeTextHeight, childInfo.maxNodeTextHeight);
            maxLabelTextHeight = Math.max(maxLabelTextHeight, childInfo.maxLabelTextHeight);

            children.push({ label: child.label, tree: childInfo.layoutTree, labelSize, offsetX: 0, labelOffsetX: 0 });
        }

        return {
            layoutTree: { tree: node, textSize, children, nodeOffsetX: 0 },
            maxLabelTextHeight,
            maxNodeTextHeight
        };
    }

    return getLayoutTreeInfo(tree);
}

export function drawTreeGraph(configuration: Configuration, canvasContext: CanvasContext, tree: Tree): void
{
    const layoutTreeInfo = prepareWorkspace(configuration, canvasContext, tree);

    layoutTree(layoutTreeInfo.layoutTree, configuration.nodePaddingX, configuration.spacing, configuration.asciiMode);

    function getLeftBoundary(node: PositionedTree): number
    {
        const halfNodeWidth = node.textSize.width / 2 + configuration.nodePaddingX;
        let leftBoundary = -halfNodeWidth + node.nodeOffsetX;

        if (node.children.length > 0)
        {
            const child = node.children[0];

            leftBoundary = Math.min(leftBoundary, child.offsetX - child.labelSize.width / 2 + child.labelOffsetX);
        }

        for (const child of node.children)
        {
            leftBoundary = Math.min(leftBoundary, child.offsetX + getLeftBoundary(child.tree));
        }

        return leftBoundary;
    }

    const leftBoundary = getLeftBoundary(layoutTreeInfo.layoutTree);
    const nodeHeight = layoutTreeInfo.maxNodeTextHeight + configuration.nodePaddingY * 2;
    const totalBranchLength2 = configuration.branchLength2 + layoutTreeInfo.maxLabelTextHeight;
    const totalBranchLength = configuration.branchLength1 + totalBranchLength2;

    function drawNode(node: PositionedTree, position: Position)
    {
        const nodeWidth = node.textSize.width + configuration.nodePaddingX * 2;

        canvasContext.drawRectangle(
            { x: position.x - nodeWidth / 2 + node.nodeOffsetX, y: position.y },
            { width: nodeWidth, height: nodeHeight });

        canvasContext.drawText(node.tree.name, { x: position.x + node.nodeOffsetX, y: position.y + nodeHeight / 2 });
    }

    function drawTree(node: PositionedTree, position: Position)
    {
        drawNode(node, position);

        const nodeBottom = position.y + nodeHeight;
        const horizontalLineY = nodeBottom + configuration.branchLength1;
        const labelPositionY = horizontalLineY + totalBranchLength2 / 2;
        const childrenTop = nodeBottom + totalBranchLength;

        if (node.children.length === 1)
        {
            const child = node.children[0];

            if (child.label === null)
            {
                canvasContext.drawLines({ x: position.x, y: nodeBottom }, { x: position.x, y: childrenTop });
            }
            else
            {
                canvasContext.drawLines(
                    { x: position.x, y: nodeBottom },
                    { x: position.x, y: labelPositionY - child.labelSize.height / 2 });

                canvasContext.drawText(child.label, { x: position.x, y: labelPositionY });

                canvasContext.drawLines(
                    { x: position.x, y: labelPositionY + child.labelSize.height / 2 },
                    { x: position.x, y: childrenTop });
            }
        }
        else if (node.children.length > 1)
        {
            canvasContext.drawLines({ x: position.x, y: nodeBottom }, { x: position.x, y: horizontalLineY });

            const firstChild = node.children[0];
            const lastChild = node.children[node.children.length - 1];
            const firstChildPositionX = position.x + firstChild.offsetX;
            const lastChildPositionX = position.x + lastChild.offsetX;
            let startY: number;
            let endY: number;

            if (firstChild.label === null)
            {
                startY = childrenTop;
            }
            else
            {
                startY = labelPositionY - firstChild.labelSize.height / 2;
            }

            if (lastChild.label === null)
            {
                endY = childrenTop;
            }
            else
            {
                endY = labelPositionY - lastChild.labelSize.height / 2;
            }

            canvasContext.drawLines(
                { x: firstChildPositionX, y: startY },
                { x: firstChildPositionX, y: horizontalLineY },
                { x: lastChildPositionX, y: horizontalLineY },
                { x: lastChildPositionX, y: endY });

            for (let i = 1; i < node.children.length - 1; i++)
            {
                const child = node.children[i];
                const childPositionX = position.x + child.offsetX;

                if (child.label === null)
                {
                    canvasContext.drawLines(
                        { x: position.x + node.children[i].offsetX, y: horizontalLineY },
                        { x: position.x + node.children[i].offsetX, y: childrenTop });
                }
                else
                {
                    canvasContext.drawLines(
                        { x: position.x + node.children[i].offsetX, y: horizontalLineY },
                        { x: position.x + node.children[i].offsetX, y: labelPositionY - child.labelSize.height / 2 });
                }
            }
        }

        for (const child of node.children)
        {
            const childPositionX = position.x + child.offsetX;

            if (child.label !== null)
            {
                canvasContext.drawText(
                    child.label,
                    { x: position.x + child.offsetX + child.labelOffsetX, y: labelPositionY });

                canvasContext.drawLines(
                    { x: childPositionX, y: labelPositionY + child.labelSize.height / 2 },
                    { x: childPositionX, y: childrenTop });
            }

            drawTree(child.tree, { x: childPositionX, y: childrenTop });
        }
    }

    if (configuration.asciiMode && !Number.isInteger(leftBoundary))
    {
        drawTree(layoutTreeInfo.layoutTree, { x: -leftBoundary - 0.5, y: 0 });
    }
    else
    {
        drawTree(layoutTreeInfo.layoutTree, { x: -leftBoundary, y: 0 });
    }
}
