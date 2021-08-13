const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

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

const getResult = function (playerSelection, computerSelection) {
  let result;

  switch (playerSelection) {
    case ROCK:
      switch (computerSelection) {
        case ROCK:
          result = RESULT_DRAW;
          break;
        case PAPER:
          result = RESULT_COMPUTER_WINS;
          break;
        case SCISSORS:
          result = RESULT_PLAYER_WINS;
          break;
        default:
          break;
      }
      break;

    case PAPER:
      switch (computerSelection) {
        case ROCK:
          result = RESULT_PLAYER_WINS;
          break;
        case PAPER:
          result = RESULT_DRAW;
          break;
        case SCISSORS:
          result = RESULT_COMPUTER_WINS;
          break;
        default:
          break;
      }
      break;

    case SCISSORS:
      switch (computerSelection) {
        case ROCK:
          result = RESULT_COMPUTER_WINS;
          break;
        case PAPER:
          result = RESULT_PLAYER_WINS;
          break;
        case SCISSORS:
          result = RESULT_DRAW;
          break;
        default:
          break;
      }
      break;

    default:
      break;
  }

  return result;
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

  const result = getResult(playerSelection, computerSelection);
  console.log(result);

  gameIsRunning = false;
});
