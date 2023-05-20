[&larr; Back](./../README.md)

# Graphs

[**Graph (GitHub Repository)**](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/graph)

**Graphs** are data structure for modeling networks.

Graphs are composed of **vertices** (nodes) which hold data, and **edges** which are a connection between two vertices. A single node is a **vertex**.

Graphs have varying degrees of connection. The higher the ratio of edges to vertices, the more connected the graph. A vertex is _adjacent_ to another vertex when their edges directly connects them.

The edge between 2 vertices are **bi-directional**.

A **path** is vertices which are connected by any number of intermediate edges.

When no path exists between two vertices, a graph is **disconnected**.

<br>

## Weighted graph

In a **weighted graph**, edges have a number or cost associated with traveling between the vertices.

When tallying the cost of a path, we add up the total cost of the edges used.

These costs are essential to algorithms that find the shortest distance between two vertices.

In a weighted graph, the shortest path is not always the least expensive.

<br>

## Directed Graphs

In a **Directed Graphs**, edges restrict the direction of movement between vertices.

This differs from earlier examples when every edge was bi-directional.

Directed graphs can form a **cycle**: a path which begins and ends at the same vertex.

<br>

## Representing Graphs

We typically represent the vertex-edge relationship of a graph in two ways: _an adjacency list or an adjacency matrix_.

- An **adjacency matrix** is a table. Across the top, every vertex in the graph appears as a column. Down the side, every vertex appears again as a row. Edges can be bi-directional, so each vertex is listed twice.

  We use `1` to mark an edge, and `0` for the absence of an edge. In a weighted graph, the cell contains the cost of that edge.

- In an **adjacency list**, each vertex contains a list of the vertices where an edge exists. To find an edge, one looks through the list for the desired vertex.

<br>
