[&larr; Back](./../README.md)

# Graph Traversals

Three of many ways to traverse a graph: depth-first search (DFS), breadth-first search (BFS), Dijkstra’s algorithm.

**Depth-First Search** - a depth-first graph search continues down a path until it reaches the end.

**Breadth-First Search** - a breadth-first graph search approach checks the values of all neighboring vertices before moving into another level of depth.

**Dijkstra’s Algorithm** - a method for finding the shortest distance from a given point to every other point in a weighted graph.

<br>

## Depth-First Search (DFS)

Depth-first search algorithms check the values along a path of vertices before moving to another path. DFS helpful for determining if a path exists between two vertices.

In order to accomplish this path-finding feat, DFS implementations use either a stack data structure or, more commonly, recursion to keep track of the path the search is on and the current vertex.

<br>

## Breadth-First Search (BFS) Conceptual

Breadth-first search checks the values of all neighboring vertices before moving into antoher level of depth.

This is an incredibly inefficient way to find just any path between two points, but it’s an excellent way to identify the shortest path between two vertices. Because of this, BFS is helpful for figuring out directions from one place to another.

BFS graph search implementations use a queue data structure to keep track of the current vertex and vertices that still have unvisited neighbors. In BFS graph search a vertex is dequeued when all neighboring vertices have been visited.

<br>

## Graph Traversal JavaScript DFS

<details>
<summary>simpleGraph</summary>

<br>

```js
const { Graph } = require("./Graph.js");

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex("v0.0.0");
const v1 = simpleGraph.addVertex("v1.0.0");
const v2 = simpleGraph.addVertex("v2.0.0");

const v11 = simpleGraph.addVertex("v1.1.0");
const v12 = simpleGraph.addVertex("v1.2.0");
const v21 = simpleGraph.addVertex("v2.1.0");

const v111 = simpleGraph.addVertex("v1.1.1");
const v112 = simpleGraph.addVertex("v1.1.2");
const v121 = simpleGraph.addVertex("v1.2.1");
const v211 = simpleGraph.addVertex("v2.1.1");

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);
```

<br>

</details>

```js
const depthFirstTraversal = (start, callback, visitedVertices = [start]) => {
  callback(start);

  start.edges.forEach((edge) => {
    const neighbor = edge.end;

    if (!visitedVertices.includes(neighbor)) {
      visitedVertices.push(neighbor);
      depthFirstTraversal(neighbor, callback, visitedVertices);
    }
  });
};

depthFirstTraversal(testGraph.vertices[0], (vertex) => {
  console.log(vertex.data);
});
```

<br>

# Graph Traversal JavaScript BFS

<details>
<summary>Queue and simpleGraph</summary>

<br>

```js
const LinkedList = require("./LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  isEmpty() {
    return this.size === 0;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

module.exports = Queue;
```

```js
const { Graph } = require("./Graph.js");

const simpleGraph = new Graph(true, false);
const startNode = simpleGraph.addVertex("v0.0.0");
const v1 = simpleGraph.addVertex("v1.0.0");
const v2 = simpleGraph.addVertex("v2.0.0");

const v11 = simpleGraph.addVertex("v1.1.0");
const v12 = simpleGraph.addVertex("v1.2.0");
const v21 = simpleGraph.addVertex("v2.1.0");

const v111 = simpleGraph.addVertex("v1.1.1");
const v112 = simpleGraph.addVertex("v1.1.2");
const v121 = simpleGraph.addVertex("v1.2.1");
const v211 = simpleGraph.addVertex("v2.1.1");

simpleGraph.addEdge(startNode, v1);
simpleGraph.addEdge(startNode, v2);

simpleGraph.addEdge(v1, v11);
simpleGraph.addEdge(v1, v12);
simpleGraph.addEdge(v2, v21);

simpleGraph.addEdge(v11, v111);
simpleGraph.addEdge(v11, v112);
simpleGraph.addEdge(v12, v121);
simpleGraph.addEdge(v21, v211);

module.exports = simpleGraph;
```

<br>

</details>

```js
const testGraph = require("./testGraph.js");
const Queue = require("./Queue.js");

const breadthFirstTraversal = (start) => {
  const visitedVertices = [start];
  const visitQueue = new Queue();
  visitQueue.enqueue(start);
  while (!visitQueue.isEmpty()) {
    const current = visitQueue.dequeue();
    console.log(current.data);
    current.edges.forEach((edge) => {
      const neighbor = edge.end;
      if (!visitedVertices.includes(neighbor)) {
        visitedVertices.push(neighbor);
        visitQueue.enqueue(neighbor);
      }
    });
  }
};
```

<br>
