const Graph = require("../../DataStructures/Graph");

let vertices = [2, 0, 1, -1, 4, 3, 5];

describe('Graph', () => {
  let testGraph;

  beforeEach(() => {
    testGraph = new Graph();
    vertices.forEach((vertex) => {
      testGraph.addVertex(vertex);
    })
  });

  test('It should insert properly', () => {
    vertices.forEach((vertex) => {
      const hasVertex = !!testGraph.adjacencyList[vertex];
      expect(hasVertex).toBe(true)
    })
  })
  test('It should add an edge', () => {
    let v0 = vertices[0];
    let v1 = vertices[1];
    testGraph.addEdge(v0, v1);
    expect(testGraph.adjacencyList[v1][0]).toBe(v0);
    expect(testGraph.adjacencyList[v0].includes(v1)).toBe(true)
  });
  test('It should add remove an edge', () => {
    let v0 = vertices[0];
    let v1 = vertices[1];
    let v2 = vertices[2];
    testGraph.addEdge(v0, v1);
    testGraph.addEdge(v0, v2);
    testGraph.addEdge(v1, v2);
    testGraph.removeEdge(v0, v1);
    expect(testGraph.adjacencyList[v2].includes(v0)).toBe(true);
    expect(testGraph.adjacencyList[v2].includes(v1)).toBe(true);
    expect(testGraph.adjacencyList[v0][0]).toBe(v2);
    expect(testGraph.adjacencyList[v1][0]).toBe(v2);
  });
  test('It should add remove a vertex', () => {
    let v0 = vertices[0];
    for (let i = 1; i < vertices.length; i++) {
      testGraph.addEdge(vertices[i], v0)
    }
    for (let i = 1; i < vertices.length; i++) {
      let v = vertices[i];
      expect(testGraph.adjacencyList[v].includes(v0)).toBe(true);
    }
    testGraph.removeVertex(v0);
    expect(!!testGraph.adjacencyList[v0]).toBe(false);
    for (let i = 1; i < vertices.length; i++) {
      let v = vertices[i];
      expect(testGraph.adjacencyList[v].includes(v0)).toBe(false);
    }
  });
})