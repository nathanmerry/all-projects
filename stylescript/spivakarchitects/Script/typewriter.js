var pos = 0;
var turn = 0;
var data = ["Meet the Team", "Explore Our Projects"];
var speed = 200;

let displayText = document.getElementById("js-typewriter-text");
let displayCurser = document.getElementById("js-typewriter-cursor");



const typeWriter = () => {
  console.log(data[turn].length);
  if (pos < data[turn].length) {
    displayText.innerHTML += data[turn].charAt(pos);
    //console.log(data[turn].charAt(pos));
    pos++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(erase, speed + 1000);
    console.log('else')
  }
};

const erase = () => {
  if (pos >= 0) {
    var str = data[turn].toString().substring(0, pos);
    displayText.innerHTML = str;
    pos--;
    setTimeout(erase, speed - 100);
    console.log('erase')
  } else {
    turn++;
    if (turn >= data.length) turn = 0;
    setTimeout(typeWriter, speed);
  }
};

setTimeout(typeWriter, speed);
