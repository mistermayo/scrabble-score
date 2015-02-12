  var scrabble = function(word) {
  var letters = word.toLowerCase().split("");
  var points = 0;
  var score = 0;

  var scrabblePoints = {

    'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1,
    'n': 1, 'r': 1, 's': 1, 't': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3,
    'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5,
    'j': 8, 'x': 8, 'q': 10, 'z': 10
    };

    letters.forEach(function(letter) {
      score = scrabblePoints[letter];
      points +=score;

    });

    return points;
};

$(function() {

  $("form#scrabble").submit(function(event) {
    $(".result").text("");
    $("#result").hide();
    $("#error").hide();

    var word = $("input#word").val();

    var score = scrabble(word)

    $(".result").text(score);

      if (isNaN(score)) {
        $("#error").show();
    } else if (word) {
        $("#result").show();
    }
    event.preventDefault();
  });
});
