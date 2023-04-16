# Doubly Linked Lists

[Doubly Linked List (GitHub Repo)](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/doubly-linked-list)

A **doubly linked list** is comprised of a series of nodes.

Each node contains DATA and TWO LINKS (or pointers) to the next and previous nodes in the list.

The head node is the node at the beginning of the list, and the tail node is the node at the end of the list.

The head node’s previous pointer is set to `null` and the tail node’s next pointer is set to `null`.

Common operations on a doubly linked list may include:

- adding nodes to both ends of the list
- removing nodes from both ends of the list
- finding, and removing, a node from anywhere in the list
- traversing (or traveling through) the list

<br>

## Adding to the List

### Adding to the Head

- **if** the there isn't a current head, then the list is empty, and we can simply make our new node both the head and tail of the list and set both pointers to null.

- **if** the list is not empty..

  1. Set the current head’s previous pointer to our new head
  2. Set the new head’s next pointer to the current head
  3. Set the new head’s previous pointer to null

### Adding to the Tail

- **if** the list is empty, then we make the new node the head and tail of the list and set the pointers to `null`.

- **if** the list is not empty..

  1. Set the current tail’s next pointer to the new tail
  2. Set the new tail’s previous pointer to the current tail
  3. Set the new tail’s next pointer to `null`

<br>

## Removing from the Head and Tail

### Removing the Head

- Set the previous pointer of the element directly after the current head to `null`, and update the head property of the list.

- If the head was also the tail, the tail removal process will occur as well.

### Removing the Tail

- Set the next pointer of the element directly before the tail to `null`, and update the tail property of the list.

- If the tail was also the head, the head removal process will occur as well.

<br>

## Removing from the Middle of the List

Two pointers that must be updated:

- Set the removed node’s preceding node’s next pointer to its following node

- Set the removed node’s following node’s previous pointer to its preceding node

There is no need to change the pointers of the removed node, as updating the pointers of its neighboring nodes will remove it from the list. If no nodes in the list are pointing to it, the node is orphaned.

<br>
