const defaultResult = 0;
let currentResult = defaultResult;

function add(number1, number2) {
  const result = number1 + number2;
  alert('The result is ' + result);
}

add(1, 2);
add(5, 5);

currentResult = ((currentResult + 10) * 3) / 2 - 1;

let calculationDescription = `((${defaultResult} + 10) * 3) / 2 - 1`;

outputResult(currentResult, calculationDescription);
