const BinarySearchTree = require("../../DataStructures/BinarySearchTree");

let nodes = [2, 0, 1, 3]

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
    expect(BST.root.right.value).toBe(3);
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
      expect(BST.find(-1)).toBe(false);
      expect(BST.find(10)).toBe(false);
    });
  })
})