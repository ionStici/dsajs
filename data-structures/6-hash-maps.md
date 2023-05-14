[&larr; Back](./../README.md)

# Hash Maps / Hash Table

[**Hash Table (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/hash-table)

<br>

## Maps

- Being a **map** means relating two pieces of information.

- _Map requirement:_ for a relationship to be a map, every key that is used can only be the key to a single value.

- When working with maps, we don't care about the sequence of the data. Instead, we only care that a given input, gives the accurate output.

- We can achieve this by turning each key in our map to an array index, so that the map value will be stored at that index.

- To turn data like map keys into array indexes, we use a special function called a **hash function**.

<br>

## Hash Functions

- A hash function takes some data as input and returns an array index as output.

- In order for it to return the corrent array index, the hash map implementation needs to know the size of the array.

- The storage location at the index given by a hash is called the **hash bucket**.

- First, the hash function translates the key into the hash, then it performs modulo arithmetic to turn the hash into an array index.

<br>

## Collisions

**Hash collision**: the hash function might produce the same hash for two different keys.

There are several strategies for resolving hash collisions.

### Separate chaining

The **separate chaining** strategy avoids collisions by updating the underlying data structure. Instead of an array of values that are mapped to by hashes, it could be an array of linked lists.

A hash map with a linked list separate chaining strategy - if a linked list already exists at the address, append the value to the linked list given.

But, given the fact that the same hash bucket can have a linked list with multiple values, how do we know which values relate back to which keys?

_By saving the map keys as well._ Iterating through the linked list and checking if our key is the same as the saved key.

### Open Addressing

Another hash collision strategy: **open addressing**.

In open addressing we stick to the array as our underlying data structure, but we continue looking for a new index to save our data if the first result of our hash function has a different key's data.

**Probing** means continuing to find new array indeces in a fixed sequence until an empty index is found.

There are more sophisticated ways to find the next address after a hash collision: Linear probing system, quadratic probing open addressing system.

**Clustering** is what happens when a single hash collision causes additional hash collisions.

<br>

## Hash Maps in JavaScript

**Hash Maps** - data structures for efficient key-value stores.

Capable of assigning and retrieving data in a fast way.

Hash map underlying data structure - **array**.

A value is stored at an array index determined by plugging the key into a hash function.

A hashing function must be _deterministic_, meaning it must always return the same index when given the same key.

After we get the hash code, we must _compress_ it (convert) to an array index using modular arithmetic and the hash map length.

<br>

```js
class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size).fill(null);
  }

  hash(key) {
    let hashCode = 0;

    for (let i = 0; i < key.length; i++)
      hashCode += hashCode + key.charCodeAt(i);

    return hashCode % this.hashmap.length;
  }

  assign(key, value) {
    const arrayIndex = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }

  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}
```
