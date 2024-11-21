let wins = 0;
let ties = 0;
let losses = 0;

let options = ["R", "P", "S"];

let playRPS = function () {
  let userChoice = window.prompt("Type R, P, or S:");

  if (!userChoice) {
    return;
  }
  userChoice = userChoice.toUpperCase();

  let index = Math.floor(Math.random() * options.length);
  let computerChoice = options[index];

  if (userChoice !== "R" && userChoice !== "P" && userChoice !== "S") {
    window.alert("Try again dum dum");
    playRPS();
    return;
  }

  window.alert("Opponent chose " + computerChoice);

  if (userChoice === computerChoice) {
    ties++;
    window.alert("Tch, it`s a tie!");

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

  let playAgain = window.confirm("Play again?");

  if (playAgain) {
    playRPS();
  }
};

playRPS();