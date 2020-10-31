describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should execute a callback on every value and should not alter tree', function () {
    var array = [];
    var func = function(value) { return value + 3; };
    binarySearchTree.insert(0);
    binarySearchTree.insert(10);
    binarySearchTree.insert(15);
    binarySearchTree.depthFirstLog(func);
    expect(binarySearchTree.contains(0)).to.equal(true);
    expect(binarySearchTree.contains(5)).to.equal(true);
    expect(binarySearchTree.contains(10)).to.equal(true);
    expect(binarySearchTree.contains(15)).to.equal(true);
  });

  it('should log the nodes contained in the tree using a breadth-first approach', function () {
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.breadthFirstLog(func);
    expect(array).to.eql([5, 2, 7, 3]);
  });


  xit('should rebalance itself after its maximum depths is twice the minimum', function () {
    //        5
    //      |   |
    //    4        6
    //   |
    //  3
    // |
    // 2
  // 1
  // 0
    console.log('BEGIN REBALANCE TEST');
    var array = [];
    var func = function (value) { array.push(value); };
    binarySearchTree.rebalance = true;
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(0);
    binarySearchTree.rebalance = false;

    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([3, 1, 0, 2, 5, 4, 6]);




  });
});
