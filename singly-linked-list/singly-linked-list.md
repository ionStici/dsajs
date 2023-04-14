# Singly Linked List

[Linked List](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/linked-list)

**Singly Linked Lists** are a linear data structure where elements are stored in nodes, and each node points to the next node in the sequence.

A linked list is comprised of a sequential chain of nodes, where each node contains two items, the _Value_ and the _Reference_ to the next node.

Linked Lists have a single **head** node, which serves as the first node in the list, then the last node is referred as the **tail**.

Unlike arrays, linked lists do not have a fixed size, and their elements are not stored in contiguous memory locations.

Linked Lists are ideal for situations where the size of the data set is unknown or can change dynamically.

Methods a linked list should provide:

1. ADD new node to the beginning of the list
2. ADD new node to the end of the list
3. REMOVE a node from the beginning of the list
4. Print out the nodes in the list in order

[Code Example](./singly-linked-list.js)

<br>

### List of common methods a linked list should have

-   append(value): Add a new element to the end of the list. This method creates a new node with the given value and inserts it at the end of the list.

-   prepend(value): Add a new element to the beginning of the list. This method creates a new node with the given value and inserts it at the head of the list.

-   insertAt(value, position): Insert a new element at a specific position in the list. This method creates a new node with the given value and inserts it at the specified position, shifting the existing elements accordingly.

-   remove(value): Remove an element with a specific value from the list. This method searches for the first occurrence of the given value in the list and removes the corresponding node.

-   removeAt(position): Remove an element at a specific position in the list. This method removes the node at the specified position and updates the references accordingly.

-   contains(value): Check if the list contains an element with a specific value. This method searches for the given value in the list and returns true if it is found, otherwise false.

-   indexOf(value): Get the index of an element with a specific value in the list. This method searches for the given value in the list and returns its position if found, otherwise -1.

-   size(): Get the size (number of elements) of the list. This method returns the current length of the list.

-   isEmpty(): Check if the list is empty. This method returns true if the list has no elements, otherwise false.

-   clear(): Remove all elements from the list. This method clears the list by setting the head and tail to null and resetting the length.

-   print(): Print the elements of the list. This method is useful for debugging purposes, and it traverses the list, printing the elements in sequence.

-   getHead(): Get the head (first element) of the list. This method returns the head node of the list.

-   getTail(): Get the tail (last element) of the list. This method returns the tail node of the list.
