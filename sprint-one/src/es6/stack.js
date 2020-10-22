class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.length] = value;
    this.length++;
  }

  pop() {
    var value;
    if (this.length > 0) {
      value = this.storage[this.length - 1];
      this.length--;
    }
    return value;
  }

  size() {
    return this.length;
  }

}