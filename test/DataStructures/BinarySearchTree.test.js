const BinarySearchTree = require("../../DataStructures/BinarySearchTree");

let nodes = [2, 0, 1, -1, 4, 3, 5]

describe('BinarySearchTree', () => {
  let BST;

  beforeEach(() => {
    BST = new BinarySearchTree();
    nodes.forEach((val) => {
      BST.insert(val);
    })
  });

  test('It should insert properly', () => {
    expect(BST.root.value).toBe(2);
    expect(BST.root.left.value).toBe(0);
    expect(BST.root.left.right.value).toBe(1);
    expect(BST.root.right.value).toBe(4);
  })
  test('It should return undefined for repeated insert', () => {
    expect(BST.insert(1)).toBe(undefined);
  })
  describe('Find', () => {
    test('It should find nodes in the tree', () => {
      nodes.forEach((val) => {
        expect(BST.find(val).value).toBe(val);
      })
    })
    test('It should return false for nodes not in the tree', () => {
      expect(BST.find(-10)).toBe(false);
      expect(BST.find(10)).toBe(false);
    });
  })

  describe('Breadth First Search', ()=> {
    test('It should perform a BFS', () => {
      expect(BST.BFS()).toEqual([2, 0, 4, -1, 1, 3, 5]);
    })
  });
  describe('Depth First Search', ()=> {
    test('It should perform a DFS PreOrder', () => {
      expect(BST.DFS_PreOrder()).toEqual([2, 0, -1, 1, 4, 3, 5]);
    })
    test('It should perform a DFS PostOrder', () => {
      expect(BST.DFS_PostOrder()).toEqual([-1, 1, 0, 3, 5, 4, 2]);
    })
    test('It should perform a DFS InOrder', () => {
      expect(BST.DFS_InOrder()).toEqual([-1, 0, 1, 2, 3, 4, 5]);
    })
  });

})