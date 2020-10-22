var Stack = function() {
  var newStack = Object.create(stackMethods);
  return newStack;
};

var stackMethods = {
  length: 0,
  storage: {},

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  },
  pop() {
    var value;
    if ( this.length !== 0 ) {
      value = this.storage[this.length - 1];
      delete this.storage[this.length - 1];
      this.length--;
    }
    return value;
  },
  size() {
    return this.length;
  }
};