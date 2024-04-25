import { mergeSort, merge } from "./merge-sort";
import { prettyPrint } from "./pretty-print";

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        this.root = buildTree(array, 0, array.length - 1); // ?
    }
}

function buildTree(arr, start, end) {
    if (start > end) {
        return null;
    }

    const midpoint = Math.floor((start + end) / 2);
    const root = new Node(arr[midpoint]);

    root.left = buildTree(arr, start, midpoint - 1);
    root.right = buildTree(arr, midpoint + 1, end);

    return root;
}

function insert(root, value) {
    if (root == null) {
        return new Node(value);
    }

    if (value < root.data) {
        root.left = insertRec(root.left, value);
    }

    if (value > root.data) {
        root.right = insertRec(root.right, value);
    }

    return root;
}

const odinArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
const sortedArray = mergeSort(myArray);
console.log(sortedArray);
const myTree = buildTree(sortedArray, 0, sortedArray.length-1);
console.log(myTree);
console.log(insert(myTree, 9))
prettyPrint(myTree);