const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const resetButton = document.getElementById('reset');
const equalsButton = document.getElementById('equals');
const calcuatorDisplay = document.getElementById('display');
let sum = 0;
let num1 = 0;
let num2 = 0;
let operator = undefined;

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

function populateDisplay(button) {
  // if resetDisplay child equals true, remove and append number1Display div
  // if number1Display div equals true and operator not pressed, continue assigning numbers to number1Display div
  // if number1Display div equals true and operator equals true, store number1Div value, remove child and append number2Display div
  let buttonValue = button.id;
  buttonValue = +button.textContent;
  calcuatorDisplay.textContent += buttonValue;
}

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    populateDisplay(button);
  });
});