var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playRPS = function () {
  var userChoice = window.prompt("Type R, P, or S:");

  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("Opponent chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert(< "Tch, it`s a tie!");

  } else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "P" && computerChoice === "R") ||
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You've won this time..");

  } else {
    losses++;
    window.alert("Muah haha! You lost!");
  }

  window.alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

  var playAgain = window.confirm("Play again?");

  if (playAgain) {
    playRPS();
  }
};

playRPS();