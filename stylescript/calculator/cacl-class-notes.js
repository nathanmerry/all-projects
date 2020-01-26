class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  // clears the operand box
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    // removes the last letter of the current operand when called
    this.currentOperand = this.currentOperand.slice(
      0,
      this.currentOperand.length - 1
    );
  }

  appendNumber(number) {
    // if the number already contains a decimal, don't display another one if clicked
    if (number === "." && this.currentOperand.includes(".")) return;
    /* converts number pressed and item(s) in the current operand to string so that we 
    can stick the numbers togeather without them actually adding togeather*/
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    // returns nothing if a number hasn't already been pressed
    if (this.currentOperand === "") return;
    // will call compute function and calculate numbers in prev operand, if it is not empty
    if (this.previousOperand !== "") {
      this.compute();
    }
    //  moves operation symbol to variable to be used
    this.operation = operation;
    /* sets the current operation as the previous operand so that the current can be moved 
    into the previous box */
    this.previousOperand = this.currentOperand;
    // empties the current operand box when operation is pressed
    this.currentOperand = "";
  }

  compute() {
    // is variable to store sum of calculation
    let computation;
    /* variables with previous/current operand converted from string to number as computer 
    can't sum togeather strings (only numbers)*/
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    // returns nothing if tries to calcualte with no numbers in equation
    if (isNaN(prev) || isNaN(current)) return;
    // different cases for the different types of equations
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "x":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    // sets the current operant to the compuation that has just been called
    this.currentOperand = computation;
    // resets the last operation that was called to avoid it being called in the later equation
    this.operation = undefined;
    // sets previous operand to nothing when equals button is clicked
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    // converts number to string so that it can be split at decimal
    const stringNumber = number.toString();
    // splits string strings at decimal - takes numbers before or after the decimal decimal
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    // variable of the display value of the number before the decimal place
    let integerDisplay;
    /* sets the integer to nothing if decimal is pressed with no integer being declared before
    (otherwise 'undefined will be displayed instead) */
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      // gives the integer commas where appropriate
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0
      });
    }
    /* called if decimal is declared - joins togeather the integer and decimal with a
    decimal in between*/
    if (decimalDigits != null) {
      console.log("hello");
      return `${integerDisplay}.${decimalDigits}`;
    }
    // if no decimals, simply returns value of the integer with no decimal
    else {
      return integerDisplay;
    }
  }

  updateDisplay() {
    // gets value from getDisplayNumber and renders this on the current operand text element
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    //
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.previousOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}
