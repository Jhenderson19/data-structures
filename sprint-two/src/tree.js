/* eslint-disable no-multi-spaces */
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return _.extend(newTree, treeMethods);
};

var treeMethods = {
};

treeMethods.addChild = function(value) {
  this.children.push(new Tree(value));
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
