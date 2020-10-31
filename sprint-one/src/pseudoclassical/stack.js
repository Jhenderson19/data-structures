var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.length = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.length] = value;
  this.length++;
};

Stack.prototype.pop = function() {
  var value;
  if (this.length > 0) {
    value = this.storage[this.length - 1];
    this.length--;
  }
  return value;
};

Stack.prototype.size = function() {
  return this.length;
};
