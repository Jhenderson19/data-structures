var Stack = function() {
  var stack = {};
  stack.storage = {};
  stack.length = 0;
  return _.extend(stack, stackMethods);
};

var stackMethods = {
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
