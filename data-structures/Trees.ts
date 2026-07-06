/**
 * 🔹 Binary Tree (TypeScript Implementation)
 *
 * Definition:
 *  - A tree is a hierarchical data structure consisting of nodes, with a root node and child nodes.
 *  - A Binary Tree is a tree where each node has at most two children: left and right.
 *
 * Characteristics:
 *  - Root node: topmost node.
 *  - Leaf nodes: nodes with no children.
 *  - Height: longest path from root to a leaf.
 *  - Used in searching, sorting, expression parsing, and hierarchical data.
 *  - Time Complexity:
 *      - Insertion: O(log n) on balanced tree, O(n) worst case
 *      - Search: O(log n) on balanced tree, O(n) worst case
 *      - Deletion: O(log n) on balanced tree, O(n) worst case
 */

class TreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null = null;

    // Insert value in a simple Binary Search Tree manner
    insert(value: T): void {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>): void {
        if (newNode.value < node.value) {
            if (node.left === null) node.left = newNode;
            else this.insertNode(node.left, newNode);
        } else {
            if (node.right === null) node.right = newNode;
            else this.insertNode(node.right, newNode);
        }
    }

    // In-order traversal: left -> root -> right
    inorderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.value);
            this.inorderTraversal(node.right);
        }
    }

    // Pre-order traversal: root -> left -> right
    preorderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            console.log(node.value);
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    // Post-order traversal: left -> right -> root
    postorderTraversal(node: TreeNode<T> | null = this.root): void {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.value);
        }
    }

    // Search for a value
    search(node: TreeNode<T> | null, value: T): boolean {
        if (node === null) return false;
        if (node.value === value) return true;
        if (value < node.value) return this.search(node.left, value);
        else return this.search(node.right, value);
    }
}

// Example usage
const tree = new BinaryTree<number>();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(80);

console.log("In-order Traversal:");
tree.inorderTraversal();

console.log("Pre-order Traversal:");
tree.preorderTraversal();

console.log("Post-order Traversal:");
tree.postorderTraversal();

console.log("Search 40:", tree.search(tree.root, 40)); // true
console.log("Search 90:", tree.search(tree.root, 90)); // false
