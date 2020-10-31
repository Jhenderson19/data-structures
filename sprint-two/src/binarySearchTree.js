var BinarySearchTree = function(x) {
  var newObject = Object.create(bstMethodsAndProps);
  newObject.value = x;
  return newObject;
};

var bstMethodsAndProps = {
  left: undefined,
  right: undefined,
  value: undefined,
  rebalance: false,

  _rebalance() {
    var values = [];

    this.depthFirstLog(function (val) {
      values.push(val);
    });

    values.sort(function (a, b) { return a - b; });

    var treeSort = function (arr) {
      if (arr.length <= 3) {
        return [arr[1], arr[0], arr[2]];
      } else {
        var middleIndex = Math.floor(arr.length / 2);
        var median = arr[middleIndex];
        var sortedValues = [];
        sortedValues.push(median);
        sortedValues.push(treeSort(arr.slice(0, middleIndex - 1)));
        sortedValues.push(treeSort(arr.slice(middleIndex + 1, arr.length - 1)));

        return sortedValues;
      }
    };

    var treeSortedValues = treeSort(values);

    this.value = treeSortedValues[0];
    this.left = undefined;
    this.right = undefined;

    for (var i = 1; i < treeSortedValues.length; i++) {
      var val = treeSortedValues[i];
      if ( val !== undefined) {
        this.insert(val);
      }
    }

  },
  _depthFinder() {
    var currentGeneration = [];
    var nextgeneration = [];
    var depths = {
      min: undefined,
      max: 0
    };
    var cDepth = 0;

    //current generation is this
    currentGeneration.push(this);

    //while current generation length is not 0
    while (currentGeneration.length > 0) {

      console.group('next generation');
      console.log(nextgeneration);
      console.groupEnd();
      for (var i = 0; i < currentGeneration.length; i++) {
        //add children to next generation
        if (currentGeneration[i].left) {
          nextgeneration.push(currentGeneration[i].left);
        } else {
          if (depths.min === undefined) {
            depths.min = cDepth;
          }
          if (cDepth > depths.max) {
            depths.max = cDepth;
          }
        }

        if (currentGeneration[i].right) {
          nextgeneration.push(currentGeneration[i].right);
        } else {
          if (depths.min === undefined) {
            depths.min = cDepth;
          }
          if (cDepth > depths.max) {
            depths.max = cDepth;
          }
        }
      }

      //current generation = nextgeneration
      currentGeneration = nextgeneration.flat();
      nextgeneration = [];
      cDepth++;

    }

    return depths;
  },
  insert(value) {

    if (value <= this.value) {
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

    if (this.rebalance) {
      var depths = this._depthFinder();
      console.log(depths);
      if ((depths.min * 2) < depths.max) {
        this._rebalance();
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
