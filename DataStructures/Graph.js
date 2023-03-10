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
  }

  DFS_recursive(vertex) {
    let list = [];
    let visited = {};

    function dfs(vertex, adjacencyList) {
      if (adjacencyList[vertex].length === 0) return;
      list.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor, adjacencyList);
        }
      })
    }
    dfs(vertex, this.adjacencyList);
    return list;
  }

  DFS_iterative(vertex) {
    let result = [];
    let stack = [vertex];
    let visited = {};
    visited[vertex] = true;
    /*while (stack.length) {
      let thisVertex = stack.pop();
      if (!visited[thisVertex]) {
        result.push(thisVertex);
        visited[thisVertex] = true;
        this.adjacencyList[thisVertex].forEach((neighbor) => {
          stack.push(neighbor)
        })
      }
    }*/
    while (stack.length) {
      let thisVertex = stack.pop();
      result.push(thisVertex);
      this.adjacencyList[thisVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
    }
    return result;
  }

  BFS(vertex) {
    let result = [];
    let queue = [vertex];
    let visited = {};
    visited[vertex] = true;
    while (queue.length) {
      let thisVertex = queue.shift();
      result.push(thisVertex);
      this.adjacencyList[thisVertex].forEach( neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      })
    }
    return result;
  }
}

module.exports = Graph;