const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

let gameIsRunning = false;

const getPlayerChoice = function () {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();

  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    selection = DEFAULT_CHOICE;
  }

  return selection;
};

const getComputerChoice = function () {
  const randomNumber = Math.random();
  let selection;

  if (randomNumber <= 1 / 3) {
    selection = ROCK;
  } else if (randomNumber <= 2 / 3) {
    selection = PAPER;
  } else {
    selection = SCISSORS;
  }

  return selection;
};

startGameBtn.addEventListener('click', function startGame() {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting..');

  const playerSelection = getPlayerChoice();
  console.log("Player's selection is " + playerSelection);
  const computerSelection = getComputerChoice();
  console.log("Computer's selection is " + computerSelection);
});
