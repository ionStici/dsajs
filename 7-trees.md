[&larr; Back](./README.md)

# Trees

[**Tree (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree)

Trees - data structure for storing hierarchical data with a directed flow.

Trees are composed of nodes which hold data. Nodes store references to zero or more other tree nodes.

Data moves down from node to node. Trees grow downwards. At the very top is the **root** node.

Hierarchical relation: _parent, child, sibling_. When a node has no children, we refer to it as a **leaf** node.

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
