var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var value;
  if (this.length > 0) {
    value = this.storage[0];
    for (var i = 0; i < this.length; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.length - 1];
    this.length--;
  }
  return value;
};

Queue.prototype.size = function() {
  return this.length;
};