var BinarySearchTree = function(x) {
  var newObject = Object.create(bstMethodsAndProps);
  newObject.value = x;
  return newObject;
};

var bstMethodsAndProps = {
  left: undefined,
  right: undefined,
  value: undefined,
  insert(value) {
    if (value < this.value) {
      if (this.left !== undefined) {
        this.left.insert(value);
      } else {
        this.left = BinarySearchTree(value);
      }
    }

    if (value > this.value) {
      if (this.right !== undefined) {
        this.right.insert(value);
      } else {
        this.right = BinarySearchTree(value);
      }
    }
  },
  contains(value) {
    if (value < this.value) {
      if (this.left !== undefined) {
        return this.left.contains(value);
      }
    }

    if (value > this.value) {
      if (this.right !== undefined) {
        return this.right.contains(value);
      }
    }

    if (value === this.value) {
      return true;
    } else {
      return false;
    }
  },
  depthFirstLog(cb) {
    cb(this.value);
    if (this.left !== undefined) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== undefined) {
      this.right.depthFirstLog(cb);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time complexity is log n for insert and contains, but linear for depthfirst
 */
