const task3Element = document.getElementById('task-3');

/* Step 01 */
function noArgumentsFunction() {
    alert('Hello World');
}

function argumentsFunction(name) {
    alert('Hello ' + name);
}

/* Step 02 */
noArgumentsFunction();
argumentsFunction('EnduranceCode');

/* Step 03 */
task3Element.addEventListener('click', noArgumentsFunction);

/* Step 04 */
function stringConcatenationFunction(firstString, secondString, thirdString) {
    const WHITE_SPACE = ' ';
    return firstString + WHITE_SPACE + secondString + WHITE_SPACE + thirdString;
}

/* Step 05 */
alert(stringConcatenationFunction('JavaScript', 'is', 'fun!'));
