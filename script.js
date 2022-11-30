const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const resetButton = document.getElementById("reset");
const equalsButton = document.getElementById("equals");
const calcuatorDisplay = document.getElementById("display");
const resetDisplay = document.createElement("div");
const number1Display = document.createElement("div");
const number2Display = document.createElement("div");
const resultDisplay = document.createElement("div");
const decimalButton = document.getElementById("decimal");
let sum = 0;
let num1 = null;
let num2 = null;
let operator = undefined;
let displayValue = 0;

resetDisplay.textContent = 0;
calcuatorDisplay.appendChild(resetDisplay);

function add(num1, num2) {
  sum = num1 + num2;
  displayResult();
}

function subtract(num1, num2) {
  sum = num1 - num2;
  displayResult();
}

function multiply(num1, num2) {
  sum = num1 * num2;
  displayResult();
}

function divide(num1, num2) {
  sum = num1 / num2;
  displayResult();
}

function displayResult() {
  sum = +sum.toFixed(2);
  calcuatorDisplay.removeChild(number2Display);
  calcuatorDisplay.appendChild(resultDisplay);
  resultDisplay.textContent = sum;
  displayValue = sum;
  operator = undefined;
}

function operation(operator, num1, num2) {
  switch (operator) {
    case "addition":
      return add(num1, num2);
      break;
    case "subtract":
      return subtract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
      break;
  }
}

function populateDisplay(button) {
  let buttonValue = button.id;
  buttonValue = +button.textContent;
  if (document.contains(resetDisplay) === true) {
    calcuatorDisplay.removeChild(resetDisplay);
    calcuatorDisplay.appendChild(number1Display);
    number1Display.textContent += buttonValue;
    displayValue = +number1Display.textContent;
    return displayValue;
  } else if (
    document.contains(number1Display) === true &&
    operator === undefined
  ) {
    number1Display.textContent += buttonValue;
    displayValue = +number1Display.textContent;
    return displayValue;
  } else if (
    document.contains(number1Display) === true &&
    operator !== undefined
  ) {
    calcuatorDisplay.removeChild(number1Display);
    calcuatorDisplay.appendChild(number2Display);
    number2Display.textContent += buttonValue;
    displayValue = +number2Display.textContent;
    return displayValue;
  } else if (
    document.contains(number2Display) === true &&
    operator !== undefined
  ) {
    number2Display.textContent += buttonValue;
    displayValue = +number2Display.textContent;
    return displayValue;
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    populateDisplay(button);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (operator !== undefined) {
      num2 = displayValue;
      operation(operator, num1, num2);
    }
    num1 = displayValue;
    operator = button.id;
    if (document.contains(resultDisplay) === true) {
      calcuatorDisplay.removeChild(resultDisplay);
      calcuatorDisplay.appendChild(number1Display);
      number1Display.textContent = sum;
      num2 = null;
      number2Display.textContent = num2;
    }
  });
});

equalsButton.addEventListener("click", () => {
  if (number2Display.textContent.length !== 0) {
    num2 = displayValue;
    operation(operator, num1, num2);
  }
});

resetButton.addEventListener("click", () => {
  location.reload();
});

decimalButton.addEventListener("click", () => {
  let decimalValue = decimalButton.textContent;
  if (document.contains(number1Display) === true) {
      number1Display.textContent += decimalValue;
      displayValue = +number1Display.textContent;
      return displayValue;
  } else if (document.contains(number2Display) === true) {
      number2Display.textContent += decimalValue;
      displayValue = +number2Display.textContent;
      return displayValue;
  }
});