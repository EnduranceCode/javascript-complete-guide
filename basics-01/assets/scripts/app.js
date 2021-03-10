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

function claculateResult(operator) {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

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

function add() {
  const OPERATOR = '+';
  claculateResult(OPERATOR);
}

function subtract() {
  const OPERATOR = '-';
  claculateResult(OPERATOR);
}

function multiply() {
  const OPERATOR = '*';
  claculateResult(OPERATOR);
}

function divide() {
  const OPERATOR = '/';
  claculateResult(OPERATOR);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
