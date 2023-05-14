[&larr; Back](./../README.md)

# Trees

[**Tree (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)

Trees - data structure for storing hierarchical data with a directed flow.

Trees are composed of nodes which hold data. Nodes store references to zero or more other tree nodes.

Data moves down from node to node. Trees grow downwards. At the very top is the **root** node.

Hierarchical relation: _parent, child, sibling_. When a node has no children, we refer to it as a **leaf** node.

A tree is composed of tree nodes. A tree node contains: some data and a list of children nodes.

<br>

## Tree Varietals

Trees come in various shapes and sizes depending on the dataset modeled.

- **Wide** - trees with parent nodes referencing many child nodes.
- **Deep** - trees with many parent-child relationships.
- **Both wide and deep**

Rule: each node will only ever have at most one parent.

Each time we move from a parent to a child, we’re moving down a **level**. Depending on the orientation we refer to this as the **depth** (counting levels down from the root node) or **height** (counting levels up from a leaf node).

<br>

## Binary Search Tree

A **binary tree** is a type of tree where each parent can have no more than **two** children, known as the left child and right child.

Further constraints make a binary search tree:

- Left child values must be lesser than their parent.
- Right child values must be greater than their parent.

The constraints of a binary search tree allow us to search the tree efficiently.

<br>

## Trees in JavaScript

```js
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild(child) {
    if (child instanceof TreeNode) {
      this.children.push(child);
    } else {
      this.children.push(new TreeNode(child));
    }
  }

  removeChild(childToRemove) {
    const length = this.children.length;

    this.children = this.children.filter((child) => {
      if (childToRemove instanceof TreeNode) {
        return childToRemove !== child;
      } else {
        return child.data !== childToRemove;
      }
    });

    if (length === this.children.length) {
      this.children.forEach((child) => child.removeChild(childToRemove));
    }
  }

  print(level = 0) {
    let result = "";

    for (let i = 0; i < level; i++) {
      result += "-- ";
    }

    console.log(`${result}${this.data}`);
    this.children.forEach((child) => child.print(level + 1));
  }

  depthFirstTraversal() {
    console.log(this.data);
    this.children.forEach((child) => child.depthFirstTraversal());
  }

  breadthFirstTraversal() {
    let queue = [this];

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.data);
      queue = queue.concat(current.children);
    }
  }
}
```

- **Depth-first traversal** visits the first child in the `children` array and that node’s children recursively before visiting its siblings and their children recursively.

- **Breadth-first traversal** visits each child in the `children` array starting from the first child before visiting their children and further layers until the bottom level is visited.

<br>
