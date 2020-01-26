const numberElement1 = document.getElementById("number-1");
const numberElement2 = document.getElementById("number-2");
const numberElement3 = document.getElementById("number-3");
const numberElement4 = document.getElementById("number-4");

class NumberCounter {
  constructor(numberElement) {
    this.numberElement = numberElement;
  }

  getTime() {
    this.statNumber = parseFloat(this.numberElement.innerText);
  }

  increaseNumber() {
    this.number = 0;

    this.test = 500 / this.statNumber;

    console.log(this.statNumber + " = " + this.test);

    this.increaseNumberInterval = setInterval(() => {
      if (this.number >= this.statNumber) {
        clearInterval(this.increaseNumberInterval);
        this.number = this.statNumber
      } else {
        this.number += (1 / this.test);
        this.updateDisplay();
      }
    }, 5);
  }

  updateDisplay() {
    this.numberElement.innerText = Math.round(this.number);
  }
}

const timerOne = new NumberCounter(numberElement1);
const timerTwo = new NumberCounter(numberElement2);
const timerThree = new NumberCounter(numberElement3);
const timerFour = new NumberCounter(numberElement4);

timerOne.getTime();
timerOne.increaseNumber();

timerTwo.getTime();
timerTwo.increaseNumber();

timerThree.getTime();
timerThree.increaseNumber();

timerFour.getTime();
timerFour.increaseNumber();
