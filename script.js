function add(a, b) {
  let sum = 0;
  return (sum = a + b);
}

function subtract(a, b) {
  let sum = 0;
  return (sum = a - b);
}

function multiply(a, b) {
  let sum = 0;
  return (sum = a * b);
}

function divide(a, b) {
  let sum = 0;
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
