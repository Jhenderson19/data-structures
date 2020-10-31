var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }

  this._storage[item] = true;
};

setPrototype.contains = function(item) {
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }

  return this._storage[item];
};

setPrototype.remove = function(item) {
  if (typeof item === 'object') {
    item = JSON.stringify(item);
  }

  this._storage[item] = false;
};

setPrototype.inCommon = function(set) {
  var returnArr = [];
  for (var key in this._storage) {
    if (set.contains(key)) {
      returnArr.push(key);
    }
  }
  return returnArr;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * Constant Time to all functions!
 */
