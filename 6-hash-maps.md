[&larr; Back](./README.md)

# Hash Maps / Hash Table

[**Hash Table (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)

Being a **map** means relating 2 pieces of information to each other.

_Map requirement:_ In order for a relationshit to be a map, every key that is used can only be the key to a single value.

For maps between 2 things, we don't care about the exact _order_ of the data. Instead, we only care that a given input gives the accurate output.

For this to work, we use arrays and their indices. An array uses indices to keep track of values in memory, so we need a way of turning each key in out map to an index in our array.

This operation of turning keys to indices is performed by a **Hash function**, which turns data into an array index as output.

<br>

## Hash Functions

A **hash function** takes some data as input an returns an array index as output.

In order for it to return the correct array index, our implementation needs to know:

- The size of the array
- The size of values already saved

**Hash functions:**

- Needs to be simple by design, it should be able to perform calculations quickly.
- It needs to be able to table whatever types of data we want to use as a key.

<br>

## Basic Hash Maps

We need:

- An array of a fixed size to insert our data into.
- A hash function that translates the keys of our array into indexes into the array.

The storage location at the index given by a hash is called the _hash bucket_.
