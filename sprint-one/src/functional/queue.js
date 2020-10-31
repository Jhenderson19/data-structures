var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0,
    front: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.front + storage.length] = value;
    storage.length++;
  };

  someInstance.dequeue = function() {
    if (storage.length > 0) {
      var value = storage[storage.front];
      delete storage[storage.front];
      storage.length--;
      storage.front++;
      return value;
    }
    return;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
