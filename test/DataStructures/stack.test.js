const Stack = require("../../DataStructures/Stack");

let nodeVals = [1, 2, 3, 4, 5, 6];

describe('SinglyLinkedList', () => {
  let stack = new Stack();

  describe('Push', () => {

    test(`Should push ${nodeVals} to list`, () => {
      nodeVals.forEach((val) => {
        stack.push(val);
      });
      expect(stack.last.val).toBe(nodeVals[0]);
      expect(stack.first.val).toBe(nodeVals[nodeVals.length - 1]);
    });
    test(`Should have a length of ${nodeVals.length}`, () => {
      expect(stack.size).toBe(nodeVals.length);
    });
  });
  describe('Pop', () => {
    test('Should pop off the tail', () => {
      expect(stack.pop()).toBe(nodeVals[nodeVals.length - 1]);
      expect(stack.first.val).toBe(nodeVals[nodeVals.length - 2]);
    })
    test(`Should have a length of ${nodeVals.length - 1}`, () => {
      expect(stack.size).toBe(nodeVals.length - 1);
    });
    test('Should return null for empty list', () => {
      let emptyStack = new Stack();
      expect(emptyStack.pop()).toBe(null);
    });
  });
})