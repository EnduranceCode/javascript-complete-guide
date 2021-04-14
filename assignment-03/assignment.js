const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

function firstTask() {
  if (randomNumber > 07) {
    console.log(randomNumber);
    alert('First generated number is greater than 0.7');
  }
}

function secondTask() {
  const parentsAge = [50, 48];
  const kidsAges = [19, 16, 11];

  for (let index = 0; index < parentsAge.length; index++) {
    console.log(parentsAge[index]);
  }

  for (const age of kidsAges) {
    console.log(age);
  }
}

function thirdTask() {
  const parentsAge = [50, 48];
  const kidsAges = [19, 16, 11];

  for (let index = parentsAge.length -1; index >= 0 ; index--) {
    console.log(parentsAge[index]);
  }

  for (const age of kidsAges) {
    console.log(age);
  }
}

function fourthTask() {
  const secondRandomNumber = Math.random();

  if (randomNumber <= 0.2 || secondTask <= 0.2 || (randomNumber > 0.7 && secondRandomNumber > 0.7)) {
    alert('One of the random numbers is smaller or equal to two or both are greater than 0.7')
  }
}

firstTask();
secondTask();
thirdTask();
fourthTask();
