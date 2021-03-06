describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should remove a nested child', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);

    tree.removeChild(7);

    expect(tree.contains(7)).to.equal(false);
  });

  it('should remove a branch from a tree', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);

    var removedTree = tree.children[1].removeFromParent();

    expect(tree.contains(6)).to.equal(false);
    expect(tree.contains(8)).to.equal(false);


    expect(removedTree.contains(6)).to.equal(true);
    expect(removedTree.contains(8)).to.equal(true);
  });

  it('should execute a callback on every value on the tree', function () {
    tree.addChild(5);
    tree.addChild(6);
    tree.addChild(9);
    tree.addChild(10);
    tree.children[0].addChild(154);
    tree.children[1].addChild(8765);
    tree.children[2].addChild(1234);
    tree.children[3].addChild(657);

    var result = [];
    var expectedLen = 9;
    var cb = function (val) {
      result.push(val);
    };

    tree.traverse(cb);

    expect(result.length).to.equal(expectedLen);
  });
});
