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

  const logEntry = {
    operator: operator,
    initialResult: resultBeforeCalculation,
    inputNumber: userInputNumber,
    finalResult: currentResult,
  };
  logEntries.push(logEntry);
  logEntry.operator;
  console.log(logEntries);
}

function add() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '+';
  currentResult += userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function subtract() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '-';
  currentResult -= userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function multiply() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '*';
  currentResult *= userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function divide() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '/';
  currentResult /= userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
