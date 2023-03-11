const MinPriorityQueue = require("./minPriorityQueue.js");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({
      node: v2,
      weight
    })
    this.adjacencyList[v2].push({
      node: v1,
      weight
    })
  }

  printGraph() {
    for (let key in this.adjacencyList) {
      console.log(`${key}: ${JSON.stringify(this.adjacencyList[key])}`)
    }
  }

  Dijkstras_v1(start, end) {
    let distances = {};
    let previous = {};
    let path = [];
    for (const key in this.adjacencyList) {
      if (key === start) distances[key] = 0;
      else distances[key] = Infinity;
      previous[key] = null;
    };
    let nodes = new MinPriorityQueue();
    nodes.enqueue(start, 0);
    while (nodes.values.length) {
      let thisVertex = nodes.dequeue();
      let vertexVal = thisVertex.val;
      let distanceFromA = thisVertex.priority;
      if (vertexVal === end) {
        while(previous[vertexVal]) {
          path.push(vertexVal);
          vertexVal = previous[vertexVal];
        }
        path.push(start);
        break;
      }
      this.adjacencyList[thisVertex.val].forEach((neighbor) => {
        let newDistance = neighbor.weight + distanceFromA;
        if (newDistance < distances[neighbor.node]) {
          distances[neighbor.node] = newDistance;
          previous[neighbor.node] = vertexVal;
          nodes.enqueue(neighbor.node, newDistance);
        }
      })
    }
    return [distances[end], path.reverse()];
  };
}

module.exports = WeightedGraph;