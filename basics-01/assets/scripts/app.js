/* eslint-disable no-undef */
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createDescriptionAndOutputResult(operator, resultBeforeCalculation, userInputNumber) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputNumber}`;
  outputResult(currentResult, calculationDescription);
}

function add() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '+';
  currentResult = resultBeforeCalculation + userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function subtract() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '-';
  currentResult = resultBeforeCalculation - userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function multiply() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '*';
  currentResult = resultBeforeCalculation * userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

function divide() {
  const resultBeforeCalculation = currentResult;
  const userInputNumber = getUserNumberInput();

  const OPERATOR = '/';
  currentResult = resultBeforeCalculation / userInputNumber;
  createDescriptionAndOutputResult(OPERATOR, resultBeforeCalculation, userInputNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
