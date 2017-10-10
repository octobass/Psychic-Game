    var wins = 0;
    var losses = 0;
    var guessesLeft = 10;
    var guessesSoFar = [];
    // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      guessesLeft--;

      // Determines which key was pressed.
      var userGuess = event.key;

      if (computerGuess === userGuess) {
        guessesSoFar = [];
        guessesLeft = 10;
        wins++;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }

      if (guessesLeft === 0) {
        guessesSoFar = [];
        guessesLeft += 10;
        losses += 1;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
      }

      guessesSoFar.push(userGuess);

      document.getElementById("wins").innerHTML = ("Wins: " + wins);
      document.getElementById("losses").innerHTML = ("Losses: " + losses); 
      document.getElementById("guessesLeft").innerHTML = ("Guesses left: " + guessesLeft); 
      document.getElementById("guessesSoFar").innerHTML = ("Your guesses so far: " + guessesSoFar); 

    };