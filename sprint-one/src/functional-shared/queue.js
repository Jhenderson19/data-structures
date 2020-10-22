var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.length = 0;
  return _.extend(queue, queueMethods);
};

var queueMethods = {
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
