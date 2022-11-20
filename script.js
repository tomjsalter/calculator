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

function operate() {
    
}