/* eslint-disable no-undef */
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createDescriptionAndOutputResult(operator, resultBeforeCalculation, userInputNumber) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputNumber}`;
  outputResult(currentResult, calculationDescription);
  writeToLog(operator, resultBeforeCalculation, userInputNumber, currentResult);
}

function writeToLog(operator, resultBeforeCalculation, userInputNumber, currentResult) {
  const logEntry = {
    operator: operator,
    initialResult: resultBeforeCalculation,
    inputNumber: userInputNumber,
    finalResult: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operator);
  console.log(logEntries);
}

function calculateResult(operator) {
  const userInputNumber = getUserNumberInput();

  if ((operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') || !userInputNumber) {
    return;
  }

  const resultBeforeCalculation = currentResult;

  if (operator === '+') {
    currentResult += userInputNumber;
  } else if (operator === '-') {
    currentResult -= userInputNumber;
  } else if (operator === '*') {
    currentResult *= userInputNumber;
  } else if (operator === '/') {
    currentResult /= userInputNumber;
  }

  createDescriptionAndOutputResult(operator, resultBeforeCalculation, userInputNumber);
}

addBtn.addEventListener('click', calculateResult.bind(this, '+'));
subtractBtn.addEventListener('click', calculateResult.bind(this, '-'));
multiplyBtn.addEventListener('click', calculateResult.bind(this, '*'));
divideBtn.addEventListener('click', calculateResult.bind(this, '/'));
