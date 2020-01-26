let counthelper = ["1", "2", "3", "4", "5", "6"];
//const test = document.getElementById("test");
//const test2 = document.getElementById("test2");
const timerHelper = () => {
  //test2.innerHTML = counthelper[curImg];
};

////////////////////////////////////////////////

const heroImage = document.getElementById("js-hero-slideshowImage"); // Variable with hero DOM object stored
const heroLayer = document.getElementById("js-hero-layer");

const progressBars = {
  one: document.getElementById("progress1"),
  two: document.getElementById("progress2"),
  three: document.getElementById("progress3"),
  four: document.getElementById("progress4"),
  five: document.getElementById("progress5"),
  six: document.getElementById("progress6")
};
let heroImages = [
  "https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-640x576.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-960x865.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1440x1297.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1920x1729.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-2880x2594.jpg 2880w",
  "https://assets.spivakarchitects.com/spivak-architects_central-park-west-apartment_living-room-rendering_2-640x360.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_central-park-west-apartment_living-room-rendering_2-960x540.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_central-park-west-apartment_living-room-rendering_2-1440x810.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_central-park-west-apartment_living-room-rendering_2-1920x1080.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_central-park-west-apartment_living-room-rendering_2-2880x1620.jpg 2880w",
  "https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-640x576.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-960x865.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1440x1297.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1920x1729.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-2880x2594.jpg 2880w",
  "https://assets.spivakarchitects.com/spivak-architects_the-montrose-vantage_308-East-38th-st_entrance-2-640x485.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_the-montrose-vantage_308-East-38th-st_entrance-2-960x728.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_the-montrose-vantage_308-East-38th-st_entrance-2-1440x1092.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_the-montrose-vantage_308-East-38th-st_entrance-2-1920x1456.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_the-montrose-vantage_308-East-38th-st_entrance-2-2880x2183.jpg 2880w",
  "https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-640x576.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-960x865.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1440x1297.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-1920x1729.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_spear-physical-therapy_brooklyn-heights-111-hicks-st-2880x2594.jpg 2880w",
  "https://assets.spivakarchitects.com/spivak-architects_bustle-office_158-West-27th-St_office-3-640x430.jpg 640w,https://assets.spivakarchitects.com/spivak-architects_bustle-office_158-West-27th-St_office-3-960x645.jpg 960w,https://assets.spivakarchitects.com/spivak-architects_bustle-office_158-West-27th-St_office-3.jpg 1440w,https://assets.spivakarchitects.com/spivak-architects_bustle-office_158-West-27th-St_office-3.jpg 1920w, https://assets.spivakarchitects.com/spivak-architects_bustle-office_158-West-27th-St_office-3.jpg 2880w"
];
let curImg = 0;
let timer = 0;
let mainSlideCall;
const progressBarsArr = Object.values(progressBars);

// function to render scale of given progress bar
const renderProgressBar = (bar, scale) => {
  bar.style.transform = `scaleX(${scale})`;
};

// finds the index of the image to choose
//sets progress bars to nothing when restarts
const changeImage = () => {
  // if index exists in arr, then jump to next index
  if (curImg < heroImages.length - 1) {
    curImg = curImg + 1;
  } else {
    // otherwise, we have reached end of the array, so:
    // set bars to nothing
    progressBarsArr.map(progressBar => {
      renderProgressBar(progressBar, 0);
    });
    // go back to first image
    curImg = 0;
  }
  if (curImg) heroImage.srcset = heroImages[curImg];
  timerHelper();
};

const setHeroImageTimed = () => {
  // how many seconds each slide should go
  let seconds = 5;
  seconds = seconds * 100;
  heroImage.srcset = heroImages[curImg];
  timerHelper();
  mainSlideCall = setInterval(() => {
    timer++;
    // load progress bar
    if (timer / seconds < 1) {
      renderProgressBar(progressBarsArr[curImg], timer / seconds);
    }
    // reset progress bar back to start when new picture loads
    if (timer > seconds - 1) {
      timer = 0;
    }
    // change picture when the timer has reached the end
    if (timer === 0) {
      changeImage();
    }
  }, 10);
};

heroLayer.addEventListener("click", () => {
  progressBarsArr.slice(0, curImg + 1).map(progressBar => {
    renderProgressBar(progressBar, 1);
  });
  clearInterval(mainSlideCall);
  changeImage();
  setHeroImageTimed();
  timer = 0;
});

setHeroImageTimed();
