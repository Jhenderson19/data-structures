class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.length = 0;
    this.storage = {};
    this.front = 0;
  }

  enqueue(value) {
    this.storage[this.front + this.length] = value;
    this.length++;
  }
  dequeue() {
    var value;
    if (this.length > 0) {
      value = this.storage[this.front];
      delete this.storage[this.front];
      this.length--;
      this.front++;
    }
    return value;
  }
  size() {
    return this.length;
  }

}
