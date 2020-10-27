var LinkedList = function() {
  var list = {};
  list.head = new Node(undefined);
  list.tail = list.head;

  list.head.next = list.tail;

  list.addToTail = function(value) {
    if (list.tail.value === undefined) {
      list.tail.value = value;
    } else {
      var newTail = new Node(undefined);
      list.tail.next = newTail;
      list.tail = newTail;
      list.tail.value = value;
    }
  };

  list.removeHead = function() {
    var removedHead = list.head.value;
    list.head = list.head.next;

    return removedHead;
  };

  list.contains = function(target) {
    var traverseAndCompare = function (currentNode) {
      if (currentNode.value === target) {
        return true;
      } else {
        if (currentNode.next) {
          return traverseAndCompare(currentNode.next);
        } else {
          return false;
        }
      }
    };

    return traverseAndCompare(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Add to Tail is O(1)
 * Remove head is O(1)
 * Contains is O(n)
 */
