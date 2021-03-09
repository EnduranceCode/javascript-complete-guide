const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  // eslint-disable-next-line no-undef
  currentResult = currentResult + parseInt(userInput.value);
  // eslint-disable-next-line no-undef
  outputResult(currentResult, '');
}

// eslint-disable-next-line no-undef
addBtn.addEventListener('click', add);
