const numBtns = document.querySelectorAll(".number");
const operateBtns = document.querySelectorAll(".operator");
let calcDisplay = document.getElementById("display");
let sum = 0;
let displayValue = 0;

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
    case operator === "add":
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

numBtns.forEach((button) => {
  button.addEventListener('click', () => {
   calcDisplay.textContent += +button.textContent;
   displayValue = +calcDisplay.textContent;
  });
});

operateBtns.forEach((button) => {
  button.addEventListener('click', () => {
    
  });
});