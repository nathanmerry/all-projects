const numberElement1 = document.getElementById("number-1");
const numberElement2 = document.getElementById("number-2");
const numberElement3 = document.getElementById("number-3");
const numberElement4 = document.getElementById("number-4");
const numbersContainer = document.getElementById("js-countdown-container");

const throttle = (func, wait, options) => {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

class NumberCounter {
  constructor(numberElement) {
    this.numberElement = numberElement;
  }

  getTime() {
    this.statNumber = parseFloat(this.numberElement.innerText);
  }

  increaseNumber() {
    this.number = 0;
    this.incrementNumber = 500 / this.statNumber;
    this.increaseNumberInterval = setInterval(() => {
      if (this.number >= this.statNumber) {
        clearInterval(this.increaseNumberInterval);
        this.number = this.statNumber;
      } else {
        this.number += 1 / this.incrementNumber;
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

let elementoffsetTop = false;

var bodyRect = document.body.getBoundingClientRect();
var elemRect = numbersContainer.getBoundingClientRect();
var offset = elemRect.top - bodyRect.top;


document.addEventListener(
  "scroll",
  throttle(() => {
    if (!elementoffsetTop) {
      // console.log("scrollTop = " + document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > offset - 500) {
        elementoffsetTop = true;
      }
    }
  }, 250)
);

// document.addEventListener("scroll", () => {
//   if (!elementoffsetTop) {
//     console.log("scrollTop = " + document.documentElement.scrollTop);
//     if (document.documentElement.scrollTop > offset - 500) {
//       elementoffsetTop = true;
//     }
//   }
// });

isScrollTopAtElement = setInterval(() => {
  if (elementoffsetTop) {
    timerOne.getTime();
    timerOne.increaseNumber();

    timerTwo.getTime();
    timerTwo.increaseNumber();

    timerThree.getTime();
    timerThree.increaseNumber();

    timerFour.getTime();
    timerFour.increaseNumber();

    clearInterval(isScrollTopAtElement);
  }
}, 100);
