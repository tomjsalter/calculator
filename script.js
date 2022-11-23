const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const resetButton = document.getElementById('reset');
const equalsButton = document.getElementById('equals');
const calcuatorDisplay = document.getElementById('display');
const resetDisplay = document.createElement('div');
const number1Display = document.createElement('div');
const number2Display = document.createElement('div');
let sum = 0;
let num1 = 0;
let num2 = 0;
let operator = undefined;
let displayValue = 0;

resetDisplay.textContent = 0;
calcuatorDisplay.appendChild(resetDisplay);

function add(num1, num2) {
  sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  sum = num1 - num2;
  return sum;
}

function multiply(num1, num2) {
  sum = num1 * num2;
  return sum;
}

function divide(num1, num2) {
  sum = num1 / num2;
  return sum;
}

function getSum(operator, num1, num2) {
  switch (operator) {
    case 'add':
      return add(num1, num2)
      break;
    case 'subtract':
      return subtract(num1, num2)
      break;
    case 'multiply':
      return multiply(num1, num2)
      break;
    case 'divide':
      return divide(num1, num2)
      break;
  }
}

function getButtonValue(button) {
  let buttonValue = button.id;
  buttonValue = +button.textContent;
  calcuatorDisplay.textContent += buttonValue;
  displayValue = +calcuatorDisplay.textContent;
  return displayValue;
}

function populateDisplay(button) {
  if (document.contains(resetDisplay) === true) {
    calcuatorDisplay.removeChild(resetDisplay);
    calcuatorDisplay.appendChild(number1Display);
    getButtonValue(button);
  } else if (document.contains(number1Display) === true && operator !== undefined) {
    num1 = displayValue;
    calcuatorDisplay.removeChild(number1Display);
    calcuatorDisplay.appendChild(number2Display);
    getButtonValue(button);
  } else {
    getButtonValue(button);
  }
}

// if user clicks result button, set number 1 and 2 variables to 0 and operator to undefined
// if user clicks operator after inputting number 2 (before pressing result), return result but move result into number1 and make number2 ready for next number. reset sum

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    populateDisplay(button);
  });
});