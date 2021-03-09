const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
  const result = number1 + number2;
  return result;
}

currentResult = add(1, 2);

let calculationDescription = '';

outputResult(currentResult, calculationDescription);
