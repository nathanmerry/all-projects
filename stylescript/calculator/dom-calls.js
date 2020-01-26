const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const squaredButton = document.querySelector("[data-squared]");
const squareRootButton = document.querySelector("[data-squareroot]");
const piButton = document.querySelector("[data-pi]");
const pi = "3.1415926535897";
const squaredAlgebraButton = document.querySelector("[data-sqaure-algebra]");

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

// On screen calls
numberButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

squaredButton.addEventListener("click", () => {
  console.log("hello");
  calculator.appendNumber("²");
  calculator.updateDisplay();
});

squareRootButton.addEventListener("click", () => {
  calculator.appendNumber("√");
  calculator.updateDisplay();
});

piButton.addEventListener("click", () => {
  calculator.clearCurrentOperand();
  calculator.appendNumber(pi);
  calculator.updateDisplay();
});

squaredAlgebraButton.addEventListener("click", () => {
  calculator.chooseOperation("^");
  calculator.updateDisplay();
});

// Keybored Calls
document.addEventListener("keydown", event => {
  // Number
  numberButtons.forEach(button => {
    if (button.innerText === event.key) {
      calculator.appendNumber(event.key);
      calculator.updateDisplay();
    }
  });

  // Equals
  if (equalsButton.innerText === event.key || event.key === "Enter") {
    calculator.compute();
    calculator.updateDisplay();
  }

  // Backspace
  if (event.key === "Backspace") {
    calculator.delete();
    calculator.updateDisplay();
  }

  // Operation
  switch (event.key) {
    case "+":
      calculator.chooseOperation("+");
      calculator.updateDisplay();
      break;
    case "-":
      calculator.chooseOperation("-");
      calculator.updateDisplay();
      break;
    case "*":
      calculator.chooseOperation("x");
      calculator.updateDisplay();
      break;
    case "/":
      calculator.chooseOperation("÷");
      calculator.updateDisplay();
      break;
    default:
      return;
  }
});
