const Queue = require("../../DataStructures/Queue");

let nodeVals = [1, 2, 3, 4, 5, 6];

describe('SinglyLinkedList', () => {
  let queue = new Queue();

  describe('Enqueue', () => {

    test(`Should enqueue ${nodeVals} to list`, () => {
      nodeVals.forEach((val) => {
        queue.enqueue(val);
      });
      expect(queue.first.val).toBe(nodeVals[0]);
      expect(queue.last.val).toBe(nodeVals[nodeVals.length - 1]);
    });
    test(`Should have a size of ${nodeVals.length}`, () => {
      expect(queue.size).toBe(nodeVals.length);
    });
  });
  describe('Dequeue', () => {
    test('Should dequeue the first value', () => {
      expect(queue.dequeue()).toBe(nodeVals[0]);
      expect(queue.first.val).toBe(nodeVals[1]);
    })
    test(`Should have a length of ${nodeVals.length - 1}`, () => {
      expect(queue.size).toBe(nodeVals.length - 1);
    });
    test('Should return null for empty list', () => {
      let emptyQueue = new Queue();
      expect(emptyQueue.dequeue()).toBe(null);
    });
  });
})