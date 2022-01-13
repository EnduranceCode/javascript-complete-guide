function sayHello(name) {
  console.log('Hi ' + name);
}

/* Firts Task */
let firstTask = name => console.log('Hi ' + name);


firstTask("Ricardo");

/* Second Task */
let secondTaskFirstFunction = (salutation, name) => console.log(salutation + ' ' + name);
let secondTaskSecondFunction = () => console.log('Hi Ricardo!');
let secondTaskThirdFunction = (salutation, name) => salutation + ' ' + name;

secondTaskFirstFunction('Hello', 'Ricardo');
secondTaskSecondFunction();
console.log(secondTaskThirdFunction('Hey', 'Ricardo'));

/* Third Task */
let thirdTask = (name, salutation = 'Howdi') => console.log(salutation + ' ' + name);

thirdTask('Ricardo');

/* Fourth Task */
let checkInput = (callback, ...listStrings) => {
  let hasEmptyStrings = false;

  if (listStrings.length > 0) {
    for (const text of listStrings) {
      if (!text) {
        hasEmptyStrings = true;
        break;
      }
    }
  } else {
    hasEmptyStrings = true;
  }

  if(hasEmptyStrings) {
    callback();
  } else {
    for (const text of listStrings) {
      console.log(text);
    }
  }
}

checkInput(() => console.log('There were empty arguments provided'));
checkInput(() => console.log('There were empty arguments provided'), 'One', 'two', 'three');
checkInput(() => console.log('There were empty arguments provided'), 'First', 'Second', 'Third', '');
