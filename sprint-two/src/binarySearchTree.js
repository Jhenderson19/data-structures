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
  },
  breadthFirstLog(cb) {

    var currentGeneration = [];
    var nextgeneration = [];

    //current generation is this
    currentGeneration.push(this);

    //while current generation length is not 0
    while (currentGeneration.length !== 0) {
      for (var i = 0; i < currentGeneration.length; i++) {

        //add children to next generation
        if (currentGeneration[i].left) {
          nextgeneration.push(currentGeneration[i].left);
        }
        if (currentGeneration[i].right) {
          nextgeneration.push(currentGeneration[i].right);
        }

        //do callback on current generation
        cb(currentGeneration[i].value);
      }

      //current generation = nextgeneration
      currentGeneration = nextgeneration.flat();
      nextgeneration = [];
    }

  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Time complexity is log n for insert and contains, but linear for depthfirst
 */
