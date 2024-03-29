const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  let selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();

  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_CHOICE} for you!`);
    selection = undefined;
  }

  return selection;
};

const getComputerChoice = () => {
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

const getResult = (computerSelection, playerSelection = DEFAULT_CHOICE) => {
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

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }

  gameIsRunning = true;
  console.log('Game is starting..');

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  let result;
  if (playerSelection) {
    result = getResult(computerSelection, playerSelection);
  } else {
    result = getResult(computerSelection);
  }

  let message = `You picked ${playerSelection || DEFAULT_CHOICE}, computer picked ${computerSelection}, therefore you `;
  switch (result) {
    case RESULT_DRAW:
      message = message + 'draw.';
      break;
    case RESULT_PLAYER_WINS:
      message = message + 'won.';
      break;
    case RESULT_COMPUTER_WINS:
      message = message + 'lost.';
      break;
    default:
      break;
  }

  alert(message);
  gameIsRunning = false;
  console.log('Game is stoped');
});

// Rest Operator and Functions inside Functions Code
const sumOrSubtractUp = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let result = 0;
  if (operation == 'ADD') {
    for (const element of numbers) {
      result += validateNumber(element);
    }
  } else {
    for (const element of numbers) {
      result -= validateNumber(element);
    }
  }

  return resultHandler(result);
};

const showResult = (messageText, result) => {
  alert(messageText + result);
};

console.log('# Rest Operator Code');
sumOrSubtractUp(showResult.bind(this, 'The result after adding all is: '), 'ADD', 1, 5, 10, -3, 6, 10);
sumOrSubtractUp(showResult.bind(this, 'The result after adding all is: '), 'ADD', 1, 5, 10, 'test', 6, 10);
sumOrSubtractUp(showResult.bind(this, 'The result after adding all is: '), 'ADD', 1, 5, 10, -3, 6, 10, 25, 88);

sumOrSubtractUp(showResult.bind(this, 'The result after subtracting is: '), 'SUBTRACT', 1, 5, 10, -3, 6, 10);
sumOrSubtractUp(showResult.bind(this, 'The result after subtracting is: '), 'SUBTRACT', 1, 5, 10, -3, 6, 10, 25, 88);
