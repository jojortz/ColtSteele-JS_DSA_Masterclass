const singlyLinkedList = require("../../DataStructures/singlyLinkedList");

let nodeVals = [1, 2, 3, 4, 5, 6];

describe('SinglyLinkedList', () => {
  let list = new singlyLinkedList();

  beforeEach(() => {
    let thisNode = list.head;
    while (thisNode) {
      list.pop();
      thisNode = list.head;
    }
    nodeVals.forEach((val) => {
      list.push(val);
    });
  })

  describe('Push', () => {

    test(`Should push ${nodeVals} to list`, () => {
      expect(list.head.val).toBe(nodeVals[0]);
      expect(list.head.next.val).toBe(nodeVals[1]);
      expect(list.tail.val).toBe(nodeVals[nodeVals.length - 1]);
      expect(list.tail.next).toBe(null);
    });
    test(`Should have a length of ${nodeVals.length}`, () => {
      expect(list.length).toBe(nodeVals.length);
    });
  });
  describe('Pop', () => {
    test('Should pop off the tail', () => {
      expect(list.pop()).toBe(nodeVals[nodeVals.length - 1]);
      expect(list.length).toBe(nodeVals.length - 1);
      expect(list.tail.val).toBe(nodeVals[nodeVals.length - 2]);
    })
    let singleList = new singlyLinkedList();
    singleList.push(1);
    test('Should handle single item and empty lists', () => {
      expect(singleList.pop()).toBe(1);
      expect(singleList.pop()).toBe(undefined);
    })
  });

  describe('Shift', () => {
    test('Should shift the first item', () => {
      expect(list.shift()).toBe(nodeVals[0]);
      expect(list.head.val).toBe(nodeVals[1]);
      expect(list.length).toBe(nodeVals.length - 1);
    });
    let singleList = new singlyLinkedList();
    singleList.push(1);
    test('Should handle single item and empty lists', () => {
      expect(singleList.shift()).toBe(1);
      expect(singleList.shift()).toBe(undefined);
    })
  });

  describe('Unshift', () => {
    test('Should add ${} to the front', () => {
      list.unshift(nodeVals[0]);
      expect(list.head.val).toBe(nodeVals[0]);
      expect(list.length).toBe(nodeVals.length + 1);
    })
    let emptyList = new singlyLinkedList();
    test('Should correctly unshift into empty list', () => {
      emptyList.unshift(1);
      expect(emptyList.head.val).toBe(1);
      expect(emptyList.tail).toBe(emptyList.head);
      expect(emptyList.length).toBe(1);
    });
  });

  describe('Get', () => {
    test('Should get the correct item at the index', () => {
      nodeVals.forEach((val, i) => {
        expect(list.get(i).val).toBe(val);
      })
    });
    test('Should return undefined for null index', () => {
      expect(list.get(nodeVals.length)).toBe(null);
      expect(list.get(-1)).toBe(null);
    })
  });

  describe('Set', () => {
    test('Should set value at index', () => {
      const idx = 5;
      const val = 25;
      expect(list.set(idx, val)).toBe(true);
      expect(list.get(idx).val).toBe(val);
      expect(list.set(nodeVals.length, 25)).toBe(false);
    });
  });
  describe('Insert', () => {
    test('Should not insert value at undefined index', () => {
      expect(list.insert(nodeVals.length + 1, 25)).toBe(false);
    });
    test('Should insert value at index', () => {
      let idx = 0;
      let val = 25;
      let previous = list.get(idx).val;
      expect(list.insert(idx, val)).toBe(true);
      expect(list.get(idx).val).toBe(val);
      expect(list.get(idx + 1).val).toBe(previous);
      expect(list.length).toBe(nodeVals.length + 1);
      idx = list.length;
      val = 26;
      expect(list.insert(idx, val)).toBe(true);
      expect(list.get(idx).val).toBe(val);
      expect(list.length).toBe(nodeVals.length + 2);
    })
  });

  describe('Remove', () => {
    test('Should return undefined for bad index', () => {
      expect(list.remove(-1)).toBe(undefined);
      expect(list.remove(list.length)).toBe(undefined);
    });
    test('Should remove value at index', () => {
      let idx = 4;
      expect(list.remove(idx)).toBe(nodeVals[idx]);
      expect(list.get(idx).val).toBe(nodeVals[idx + 1]);
      expect(list.get(idx - 1).val).toBe(nodeVals[idx - 1]);
      expect(list.length).toBe(nodeVals.length - 1);
    });
  });

  describe('Reverse', () => {
    test('Should reverse the list', () => {
      list.reverse();
      nodeVals.forEach((val, i) => {
        expect(list.get(nodeVals.length - 1 - i).val).toBe(val);
      })
      expect(list.tail.next).toBe(null);
      expect(list.tail.val).toBe(nodeVals[0]);
      expect(list.head.val).toBe(nodeVals[nodeVals.length - 1]);
      let singleList = new singlyLinkedList();
      singleList.push(1);
      expect(singleList).toBe(singleList.reverse());
    })
  })
})