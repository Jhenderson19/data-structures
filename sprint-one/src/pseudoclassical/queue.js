var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = 0;
  this.front = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.front + this.length] = value;
  this.length++;
};

Queue.prototype.dequeue = function() {
  var value;
  if (this.length > 0) {
    value = this.storage[this.front];
    delete this.storage[this.front];
    this.length--;
    this.front++;
  }
  return value;
};

Queue.prototype.size = function() {
  return this.length;
};