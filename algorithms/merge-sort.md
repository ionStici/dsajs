[&larr; Back](./../README.md)

# Merge Sort

Merge sort is a divide-and-conquer algorithm for sorting lists of items. It works by recursively dividing the list into two halves, sorting each half, and then merging the sorted halves back together.

In a _divide-and-conquer_ algorithm, the data is continually broken down into smaller elements until sorting them becomes really simple.

1. _Divide:_ If the list has only one element, it's already sorted and you can return it immediately. This is the base case for the recursion. Otherwise, you divide the list into two approximately equal halves.
2. _Conquer:_ Recursively sort each half of the list.
3. _Combine:_ Merge the two sorted halves back into one sorted list.

<br>

## Merge Sort in JavaScript

The Merge and Sort algorithm consists of two distinct steps:

1. _Splitting the input array_ – The algorithm recursively splits the input array until each element is in its own array.

2. _Merging sorted arrays_ – The algorithm compares and combines the elements of arrays until the input array is sorted.

[Merge Sort Algorithm Diagram](https://en.wikipedia.org/wiki/File:Merge_sort_algorithm_diagram.svg)

<br>

```js
const mergeSort = (startArray) => {
  const length = startArray.length;
  if (length === 1) {
    return startArray;
  }

  const mid = Math.floor(length / 2);
  const leftArray = startArray.slice(0, mid);
  const rightArray = startArray.slice(mid, length);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArray, rightArray) => {
  const sortedArray = [];
  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] < rightArray[0]) {
      sortedArray.push(leftArray[0]);
      leftArray.shift();
    } else {
      sortedArray.push(rightArray[0]);
      rightArray.shift();
    }
  }

  return sortedArray.concat(leftArray).concat(rightArray);
};

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));
```

<br>
