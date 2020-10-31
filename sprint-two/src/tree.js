/* eslint-disable no-multi-spaces */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = undefined;

  // your code here
  newTree.children = [];  // fix me

  return _.extend(newTree, treeMethods);
};

var treeMethods = {
};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.removeChild = function(value) {
  if (this.value === value) {
    delete this;
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];

    if (child.value === value) {
      this.children.splice(i, 1);
    }
  }

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];

    child.removeChild(value);
  }
};

treeMethods.removeFromParent = function () {
  for (var i = 0; i < this.parent.children.length; i++) {
    var child = this.parent.children[i];

    if (Object.is(child, this)) {
      this.parent.children.splice(i, 1);
    }
  }

  this.parent = undefined;

  return this;
};

treeMethods.traverse = function(cb) {
  cb(this.value);

  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];

    child.traverse(cb);
  }
};

treeMethods.contains = function(target) {
  var traverseAndCompare = function(currentTree) {

    if (currentTree.value === target) {
      return true;

    } else {

      if (currentTree.children.length > 0) {

        var found = false;

        for (var i = 0; i < currentTree.children.length; i++) {
          found = traverseAndCompare(currentTree.children[i]);

          if (found) {
            return true;
          }

        }

      }
      return false;
    }
  };

  return traverseAndCompare(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild is constant
 * contains is linear
 */
