var wins = 0;
var ties = 0;
var losses = 0;

var options = ["R", "P", "S"];

var playRPS = function () {
  var userChoice = window.prompt("Enter R, P, or S:");

  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

  };

  playRPS();