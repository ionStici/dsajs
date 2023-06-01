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

## Graphs in JavaScript

Implementation that supports: directed, undirected, weighted, and unweighted graphs.

<br>

**Vertex Class:**

```js
class Vertex {
  constructor(data) {
    this.data = data;
    this.edges = [];
  }

  addEdge(vertex, weight) {
    if (vertex instanceof Vertex) {
      this.edges.push(new Edge(this, vertex, weight));
    } else {
      throw new Error("Edge start and end must both be Vertex");
    }
  }

  removeEdge(vertex) {
    this.edges = this.edges.filter((edge) => edge.end !== vertex);
  }

  print() {
    const edgeList = this.edges.map((edge) =>
      edge.weight !== null ? `${edge.end.data} (${edge.weight})` : edge.end.data
    );

    const output = `${this.data} --> ${edgeList.join(", ")}`;
    console.log(output);
  }
}
```

<br>

**Edge Class:**

```js
class Edge {
  constructor(start, end, weight = null) {
    this.start = start;
    this.end = end;
    this.weight = weight;
  }
}
```

<br>

**Graph Class:**

```js
class Graph {
  constructor(isWeighted = false, isDirected = false) {
    this.vertices = [];
    this.isWeighted = isWeighted;
    this.isDirected = isDirected;
  }

  addVertex(data) {
    const newVertex = new Vertex(data);
    this.vertices.push(newVertex);

    return newVertex;
  }

  removeVertex(vertex) {
    this.vertices = this.vertices.filter((v) => v !== vertex);
  }

  addEdge(vertexOne, vertexTwo, weight) {
    const edgeWeight = this.isWeighted ? weight : null;

    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.addEdge(vertexTwo, edgeWeight);

      if (!this.isDirected) {
        vertexTwo.addEdge(vertexOne, edgeWeight);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  removeEdge(vertexOne, vertexTwo) {
    if (vertexOne instanceof Vertex && vertexTwo instanceof Vertex) {
      vertexOne.removeEdge(vertexTwo);

      if (!this.isDirected) {
        vertexTwo.removeEdge(vertexOne);
      }
    } else {
      throw new Error("Expected Vertex arguments.");
    }
  }

  print() {
    this.vertices.forEach((vertex) => vertex.print());
  }
}
```

<br>

**Graph Practical Example:**

```js
const trainNetwork = new Graph(true, true);

const losAngeles = trainNetwork.addVertex("Los Angeles");
const sanFrancisco = trainNetwork.addVertex("San Francisco");
const newYork = trainNetwork.addVertex("New York");
const atlanta = trainNetwork.addVertex("Atlanta");
const denver = trainNetwork.addVertex("Denver");
const calgary = trainNetwork.addVertex("Calgary");

trainNetwork.addEdge(sanFrancisco, losAngeles, 400);
trainNetwork.addEdge(losAngeles, sanFrancisco, 400);

trainNetwork.addEdge(newYork, denver, 1800);
trainNetwork.addEdge(denver, newYork, 1800);

trainNetwork.addEdge(calgary, denver, 1000);
trainNetwork.addEdge(denver, calgary, 1000);

trainNetwork.addEdge(losAngeles, atlanta, 2100);
trainNetwork.addEdge(atlanta, losAngeles, 2100);

trainNetwork.removeEdge(newYork, denver);
trainNetwork.removeEdge(calgary, denver);
trainNetwork.removeEdge(denver, calgary);
trainNetwork.removeVertex(calgary);

trainNetwork.print();
```

<br>
