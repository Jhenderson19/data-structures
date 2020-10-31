var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    length: 0
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storage.length] = value;
    storage.length++;
  };

  someInstance.pop = function() {
    if (storage.length !== 0) {
      var value = storage[storage.length - 1];
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
