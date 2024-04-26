import { mergeSort, merge } from "./merge-sort";
import { prettyPrint } from "./pretty-print";

// 1
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// 2
class Tree {
    constructor(array, start, end) {
        this.root = this.buildTree(array, start, end); // ?
    }

    // 3
    buildTree(array, start, end) {
        if (start > end) {
            return null;
        }

        const midpoint = Math.floor((start + end) / 2);
        const root = new Node(array[midpoint]);

        root.left = this.buildTree(array, start, midpoint - 1);
        root.right = this.buildTree(array, midpoint + 1, end);

        return root;
    }
}

// 4
function insert(root, value) {
    if (root == null) {
        return new Node(value);
    }

    if (value < root.data) {
        root.left = insert(root.left, value);
    }

    if (value > root.data) {
        root.right = insert(root.right, value);
    }

    return root;
}

function deleteItem(root, value) {
    let nodeToDelete = find(root, value);

    if (!nodeToDelete) {return null;}

    if (!nodeToDelete.left && !nodeToDelete.right) {
        nodeToDelete.data = null;
    }

    if (nodeToDelete.left && !nodeToDelete.right) {
        nodeToDelete.data = nodeToDelete.left.data;
        nodeToDelete.left = null;
    }

    if (!nodeToDelete.left && nodeToDelete.right) {
        nodeToDelete.data = nodeToDelete.right.data;
        nodeToDelete.right = null;
    }

    if (nodeToDelete.left && nodeToDelete.right) {
        let currentNode = nodeToDelete.right;
        while (currentNode.left) {
            currentNode = currentNode.left;
        } // current node will be leftmost node on right tree
        nodeToDelete.data = currentNode.data;
        nodeToDelete.right = currentNode.right;
        currentNode.data = null;
    }
}

// 5
function find(root, value) {
    let currentNode = root;
    while (currentNode) {
        if (value == currentNode.data) {
            return currentNode;
        }
        if (!value == currentNode.data && !currentNode.left && !currentNode.right) {
            return null;
        }
        if (value < currentNode.data) {
            currentNode = currentNode.left;
        } else if (value > currentNode.data) {
            currentNode = currentNode.right;
        }
    }
}

// 6
function levelOrder(root, callback) {
    const queue = [];
    const traversed = [];
    queue.push(root);
    while (queue.length > 0) {
        const currentNode = queue.shift();
        traversed.push(currentNode.data);
        if (currentNode.left) {
            queue.push(currentNode.left);
        } if (currentNode.right) {
            queue.push(currentNode.right);
        }
    }
    return traversed;
}

// 7
function inOrder(node, callback) {
    const traversed = [];
    function inOrderRec(node) {
        if (node == null) {
            return;
        }
        inOrderRec(node.left);
        traversed.push(node.data);
        inOrderRec(node.right);
    }
    inOrderRec(node);
    return traversed;
}

const odinArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = mergeSort(odinArray);

const odinTree = new Tree(sortedArray, 0, sortedArray.length-1);
console.log(odinTree);
prettyPrint(odinTree.root);

console.log(levelOrder(odinTree.root));
console.log(inOrder(odinTree.root));

deleteItem(odinTree.root, 4)
prettyPrint(odinTree.root);