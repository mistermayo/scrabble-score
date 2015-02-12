describe("scrabble", function() {
  it("returns score for a single letter", function(){
    expect(scrabble("d")).to.equal(2);
  });

  it("returns score for a full word", function() {
    expect(scrabble("Cat")).to.equal(5);
  });
});
