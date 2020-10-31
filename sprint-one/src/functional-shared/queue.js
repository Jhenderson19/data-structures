var Queue = function() {
  var queue = {};
  queue.storage = {};
  queue.length = 0;
  queue.front = 0;
  return _.extend(queue, queueMethods);
};

<<<<<<< HEAD
var queueMethods = {};
=======
var queueMethods = {
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
>>>>>>> part-one
