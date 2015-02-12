describe('scrabble', function() {
  it("return score for a single letter", function(){
    expect(scrabble("d")).to.equal(2);
  });

  it("return score for a full word", function() {
    expect(scrabble("Cat")).to.equal(5);
  });

});
