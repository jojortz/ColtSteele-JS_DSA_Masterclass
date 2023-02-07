const MinPriorityQueue = require("../../DataStructures/MinPriorityQueue");

let vals = [
  {
    val: 'snake',
    priority: 2
  },
  {
    val: 'cat',
    priority: 1
  },
  {
    val: 'lizard',
    priority: 2
  },
  {
    val: 'bird',
    priority: 1
  },
  {
    val: 'crocodile',
    priority: 3
  },
  {
    val: 'dog',
    priority: 0
  },
  {
    val: 'bear',
    priority: 3
  },
];

describe('MinPriorityQueue', () => {
  let priorityQueue;

  beforeEach(() => {
    priorityQueue = new MinPriorityQueue();
    vals.forEach((node) => {
      priorityQueue.enqueue(node.val, node.priority);
    })
  });

  test('It should enqueue properly', () => {
    let expected = ['dog', 'bird', 'cat', 'snake', 'crocodile', 'lizard', 'bear'];
    expected.forEach((animal, i) => {
      expect(priorityQueue.values[i].val).toBe(animal);
    })
  });
  test('It should dequeue properly', () => {
    let expected = ['dog', 'bird', 'cat', 'snake', 'lizard', 'bear', 'crocodile'];
    expected.forEach((animal, i) => {
      expect(priorityQueue.dequeue().val).toBe(animal);
    })
    expect(priorityQueue.dequeue()).toBe(undefined);
  });
})