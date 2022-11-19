const numButtons = document.querySelectorAll(".number");
const operateButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
let calcDisplay = document.getElementById("display");
let sum = 0;
let num1 = 0;
let num2 = 0;
let displayValue = 0;
let operator;

function add(num1, num2) {
  return (sum = num1 + num2);
}

function subtract(num1, b) {
  return (sum = num1 - num2);
}

function multiply(num1, num2) {
  return (sum = num1 * num2);
}

function divide(num1, num2) {
  return (sum = num1 / num2);
}

function operate(operator, num1, num2) {
  switch (operator) {
    case operator === "addition":
      add(num1, num2);
      break;
    case operator === "subtract":
      subtract(num1, num2);
      break;
    case operator === "multiply":
      multiply(num1, num2);
      break;
    case operator === "divide":
      divide(num1, num2);
      break;
  }
}

numButtons.forEach((button) => {
  button.addEventListener('click', () => {
   calcDisplay.textContent += +button.textContent;
   displayValue = +calcDisplay.textContent;
   return displayValue;
  });
});

operateButtons.forEach((button) => {
  button.addEventListener('click', () => {
    num1 = displayValue;
    operator = button.id;
  });
});

equalsButton.addEventListener('click', () => {
  operate(operator, num1, num2);
});