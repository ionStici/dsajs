[&larr; Back](./../README.md)

# Binary Search and Search Trees

**Binary search** _requires a sorted data-set_. We then take the following steps:

1. **Check the middle value of the dataset.**

   2. If this value matches our target we can return the index.

2. If the middle value is **less than our target**

   4. Start at step 1 using the **right half** of the list.

3. If the middle value is **greater than our target**

   6. Start at step 1 using the **left half** of the list.

We eventually run out of values in the list or find the target value.

In each iteration, we are cutting the list in half. The time complexity is `O(log N)`.

<br>

## Binary Search in JavaScript

```js
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length;

  while (right > left) {
    const indexToCheck = Math.floor((left + right) / 2);
    const checking = arr[indexToCheck];
    console.log(indexToCheck);

    if (checking === target) {
      return indexToCheck;
    } else if (checking < target) {
      left = indexToCheck + 1;
    } else {
      right = indexToCheck;
    }
  }

  return null;
};

const searchable = [1, 2, 7, 8, 22, 28, 41, 58, 67, 71, 94];
const target = 41;

targetIndex = binarySearch(searchable, target);
```

<br>

## Binary Search Trees

```js
class BinaryTree {
  constructor(value, depth = 1) {
    this.value = value;
    this.depth = depth;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BinaryTree(value, this.depth + 1);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BinaryTree(value, this.depth + 1);
      } else {
        this.right.insert(value);
      }
    }
  }

  getNodeByValue(value) {
    if (this.value === value) {
      return this;
    } else if (this.left && value < this.value) {
      return this.left.getNodeByValue(value);
    } else if (this.right) {
      return this.right.getNodeByValue(value);
    } else {
      return null;
    }
  }

  depthFirstTraversal() {
    if (this.left) {
      this.left.depthFirstTraversal();
    }
    console.log(`Depth=${this.depth}, Value=${this.value}`);
    if (this.right) {
      this.right.depthFirstTraversal();
    }
  }
}
```

```js
const randomize = () => Math.floor(Math.random() * 40);
const bt = new BinaryTree(15);
let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(randomize());
  bt.insert(numbers[i]);
}

console.log(`Inserted [ ${numbers} ] to binary tree`);

console.log("Depth First Traversal");
bt.depthFirstTraversal();
```

<br>
