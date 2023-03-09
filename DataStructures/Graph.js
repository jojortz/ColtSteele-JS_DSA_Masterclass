class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    //TODO handle non-existent v1
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    //TODO handle errors
    //version 1
    /* let v1Index = this.adjacencyList[v2].indexOf(v1);
    this.adjacencyList[v2].splice(v1Index, 1);
    let v2Index = this.adjacencyList[v1].indexOf(v2);
    this.adjacencyList[v1].splice(v2Index, 1);
    */
    //version 2
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex !== v1);
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      /* v1
      delete this.adjacencyList[vertex];
      for (const thisVertex in this.adjacencyList) {
        this.adjacencyList[thisVertex] = this.adjacencyList[thisVertex].filter((v) => v !== vertex);
      } */
      while (this.adjacencyList[vertex].length) {
        let adjVertex = this.adjacencyList[vertex].pop();
        //this.removeEdge(vertex, adjVertex);
        this.adjacencyList[adjVertex] = this.adjacencyList[adjVertex].filter((v) => v !== vertex);
      }
      delete this.adjacencyList[vertex];
    }
  };
}

module.exports = Graph;