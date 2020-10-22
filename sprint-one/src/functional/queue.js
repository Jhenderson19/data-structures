var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storage.length] = value;
    storage.length++;
  };

  someInstance.dequeue = function() {
    if (storage.length !== 0) {
      var value = storage[0];

      for (var i = 0; i < storage.length; i++ ) {
        storage[i] = storage[i + 1];
      }
      delete storage[storage.length - 1];
      storage.length--;
      return value;
    }
    return;
  };

  someInstance.size = function() {
    return storage.length;
  };

  return someInstance;
};
