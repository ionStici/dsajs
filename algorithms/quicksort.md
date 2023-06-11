[&larr; Back](./../README.md)

# Quicksort

[Quicksort Diagram](https://www.techiedelight.com/wp-content/uploads/Quicksort.png)

**Quicksort** is an efficient algorithm for sorting values in a list.

Quicksort uses a _divide and conquer_ strategy, breaking the problem into smaller sub-problems until the solution is so clear there’s nothing to solve.

A single element, the **pivot**, is chosen from the list. All the remaining values are partitioned into two sub-lists containing the values smaller than and greater than the pivot element.

Ideally, this process of dividing the array will produce sub-lists of nearly equal length, otherwise, the runtime of the algorithm suffers.

When the dividing step returns sub-lists that have one or less elements, each sub-list is sorted. The sub-lists are recombined, or swaps are made in the original array, to produce a sorted list of values.

Quicksort is an unusual algorithm in that the worst case runtime is `O(N^2)`, but the average case is `O(N * logN)`.

<br>

## Quicksort in JavaScript

The basic idea of the quicksort algorithm is to:

- split the initial unsorted data set into a left partition and a right partition
- sort each partition recursively until there is only one element left
- return the sorted array

We use a pivot element to divide our unsorted array into two parts. The elements in these parts must meet these conditions after partitioning:

- all elements in the left partition must be less than or equal to the pivot element
- all elements in the right partition must be greater than or equal to the pivot element

Choosing the pivot element: first, last, middle or a random element of the array.

When the partitioning and swapping are done, the arrays are sorted from smallest to largest.

<br>

```js
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};
```

```js
const quicksort = (array, leftBound = 0, rightBound = array.length - 1) => {
  if (leftBound < rightBound) {
    const pivotIndex = partition(array, leftBound, rightBound);
    quicksort(array, leftBound, pivotIndex - 1);
    quicksort(array, pivotIndex, rightBound);
  }
  return array;
};

const partition = (array, leftIndex, rightIndex) => {
  const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
  while (leftIndex <= rightIndex) {
    while (array[leftIndex] < pivot) {
      leftIndex++;
    }
    while (array[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(array, leftIndex, rightIndex);
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
};
```

```js
const randomize = () => Math.floor(Math.random() * 40);

let numbers = [];

for (let i = 0; i < 5; i++) numbers.push(randomize());

console.log("Before quicksort:", numbers);
const sorted = quicksort(numbers);
console.log("After  quicksort:", sorted);
```

<br>
