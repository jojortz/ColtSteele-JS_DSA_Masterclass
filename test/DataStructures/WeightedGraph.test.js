const WeightedGraph = require("../../DataStructures/WeightedGraph");

let vertices = ["A", "B", "C", "D", "E", "F"];

describe('Weighted Graph', () => {
  let testGraph;

  beforeEach(() => {
    testGraph = new WeightedGraph();
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

  test('It should add an edge with weight', () => {
    let v0 = vertices[0];
    let v1 = vertices[1];
    let weight = 90;
    testGraph.addEdge(v0, v1, weight);
    expect(testGraph.adjacencyList[v1][0].node).toBe(v0);
    expect(testGraph.adjacencyList[v1][0].weight).toBe(weight);
    expect(testGraph.adjacencyList[v0][0].node).toBe(v1)
    expect(testGraph.adjacencyList[v0][0].weight).toBe(weight);
  });

  test('It should find the shortest route with Dijkstra\'s algo', () => {
    testGraph.addEdge("A", "B", 4);
    testGraph.addEdge("A", "C", 2);
    testGraph.addEdge("B", "E", 3);
    testGraph.addEdge("C", "D", 2);
    testGraph.addEdge("C", "F", 4);
    testGraph.addEdge("D", "E", 3);
    testGraph.addEdge("D", "F", 1);
    testGraph.addEdge("E", "F", 1);

    expect(testGraph.Dijkstra("A", "B")[0]).toBe(4);
    expect(testGraph.Dijkstra("A", "C")[0]).toBe(2);
    expect(testGraph.Dijkstra("A", "D")[0]).toBe(4);
    expect(testGraph.Dijkstra("A", "E")[0]).toBe(6);
    expect(testGraph.Dijkstra("A", "F")[0]).toBe(5);
    expect(testGraph.Dijkstra("A", "B")[1]).toEqual(["A", "B"]);
    expect(testGraph.Dijkstra("A", "C")[1]).toEqual(["A", "C"]);
    expect(testGraph.Dijkstra("A", "D")[1]).toEqual(["A", "C", "D"]);
    expect(testGraph.Dijkstra("A", "E")[1]).toEqual(["A", "C", "D", "F", "E"]);
    expect(testGraph.Dijkstra("A", "F")[1]).toEqual(["A", "C", "D", "F"]);
  })
})