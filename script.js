let sum = 0;
const numBtns = document.querySelectorAll(".number");
let calcDisplay = document.getElementById("display");
let displayValue = 0;

function add(a, b) {
  return (sum = a + b);
}

function subtract(a, b) {
  return (sum = a - b);
}

function multiply(a, b) {
  return (sum = a * b);
}

function divide(a, b) {
  return (sum = a / b);
}

function operate(operator, a, b) {
  switch (operator) {
    case operator === "add":
      add(a, b);
      break;
    case operator === "subtract":
      subtract(a, b);
      break;
    case operator === "multiply":
      multiply(a, b);
      break;
    case operator === "divide":
      divide(a, b);
      break;
  }
}

numBtns.forEach((button) => {
  button.addEventListener('click', () => {
   displayValue = +button.innerHTML;
   calcDisplay.textContent = +button.innerHTML;
  //  let createDigit = document.createElement('p');
  //  createDigit.textContent = +button.innerHTML;
  //  calcDisplay.appendChild(createDigit);
  });
});