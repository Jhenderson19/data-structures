var Queue = function() {
  var newObject = Object.create(queueMethods);
  return newObject;
};
var test;
var queueMethods = {
  length: 0,
  storage: {},
  enqueue(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  dequeue() {
    var value;
    if (this.length !== 0) {
      value = this.storage[0];
      for (var i = 0; i < this.length; i++) {
        this.storage[i] = this.storage[i + 1];
      }
      delete this.storage[this.length - 1];
      this.length--;
    }
    return value;
  },
  size() {
    return this.length;
  }
};
