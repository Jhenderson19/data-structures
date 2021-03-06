describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });


  it('should return common values from a pair of sets', function () {
    set.add('Mel Gibson');
    set.add('fluff');
    set.add('fluff2');

    var set2 = Set();
    set2.add('lakers');
    set2.add('Mel Gibson');

    var inCommon = ['Mel Gibson'];

    expect(set.inCommon(set2)).to.eql(inCommon);
  });

  it('should handle numbers and strings', function () {
    set.add('Gibson Mel');
    set.add(5);

    expect(set.contains('Gibson Mel')).to.equal(true);
    expect(set.contains(5)).to.equal(true);
  });

  it('should handle objects of any type', function () {
    set.add([1, 2, 3, 4]);
    set.add({ a: 'b' });

    expect(set.contains([1, 2, 3, 4])).to.equal(true);
    expect(set.contains({ a: 'b' })).to.equal(true);
  });
});
