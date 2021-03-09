/* eslint-disable no-undef */
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}
function add() {
  const calculationDescription = `${currentResult} + ${getUserNumberInput()}`;
  currentResult = currentResult + getUserNumberInput();
  outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
