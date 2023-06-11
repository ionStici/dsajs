[&larr; Back](./../README.md)

# Bubble Sort

The bubble sort algorithm takes an array of elements and reorders the elements of the input from smallest to largest. To achieve this, bubble sort works by comparing a pair of neighboring elements and swapping their positions in the array so that the larger of the two elements is always on the right. Doing this continuously results in the largest element “bubbling” up to the end of the array. The algorithm only stops when there are no more values that need to be swapped.

```js
const swap = (arr, indexOne, indexTwo) => {
  const temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};
```

```js
const bubbleSort = (input) => {
  let swapCount = 0;
  let swapping = true;

  while (swapping) {
    swapping = false;
    for (let i = 0; i < input.length - 1; i++) {
      if (input[i] > input[i + 1]) {
        swap(input, i, i + 1);
        swapCount++;
        swapping = true;
      }
    }
  }

  console.log(`Swapped ${swapCount} times`);
  return input;
};
```
