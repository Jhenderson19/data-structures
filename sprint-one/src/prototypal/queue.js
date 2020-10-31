var Queue = function() {
  var newObject = Object.create(queueMethods);
  return newObject;
};

var queueMethods = {
  length: 0,
  front: 0,
  storage: {},
  enqueue(value) {
    this.storage[this.front + this.length] = value;
    this.length++;
  },
  dequeue() {
    var value;
    if (this.length > 0) {
      value = this.storage[this.front];
      delete this.storage[this.front];
      this.length--;
      this.front++;
    }
    return value;
  },
  size() {
    return this.length;
  }
};
