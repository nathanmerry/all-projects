class CollageSlideshow {
  constructor(chosenImageElement) {
    this.chosenImageElement = chosenImageElement;
  }

  loadSlideShow(collageImageNodeArr) {
    this.collageImageNodeArr = collageImageNodeArr;
    this.collageImageArr = Array.prototype.slice.call(this.collageImageNodeArr);
    this.slideShowLoaded = true;
  }

  deleteSlideShow() {
    this.slideShowLoaded = false;
  }

  getChosenImageIndex(selectedCollageImage) {
    this.selectedCollageImage = selectedCollageImage;
    this.selectedCollageImageIndex = this.collageImageArr.indexOf(
      this.selectedCollageImage
    );
  }

  slideLeft() {
    switch (true) {
      case this.selectedCollageImageIndex > 0:
        this.selectedCollageImageIndex -= 1;
        break;
      case this.selectedCollageImageIndex === 0:
        this.selectedCollageImageIndex = this.collageImageArr.length - 1;
        break;
      default:
        return;
    }
  }

  slideRight() {
    switch (true) {
      case this.selectedCollageImageIndex < this.collageImageArr.length - 1:
        this.selectedCollageImageIndex += 1;
        break;
      case this.selectedCollageImageIndex === this.collageImageArr.length - 1:
        this.selectedCollageImageIndex = 0;
        break;
      default:
        return;
    }
  }

  updateDisplay() {
    if (this.slideShowLoaded) {
      switchClass(slideShowContainer, "is-active", "is-inactive");
    } else {
      switchClass(slideShowContainer, "is-inactive", "is-active");
    }
    this.displayedImage = this.collageImageArr[this.selectedCollageImageIndex];
    this.chosenImageElement.src = this.displayedImage.getAttribute("src");
  }
}

const slideShowContainer = document.getElementById("js-slideshow-container");
const collageImages = document.querySelectorAll("[data-collage-image]");
const arrrowLeft = document.getElementById("js-slideshow-arrow-left");
const arrrowRight = document.getElementById("js-slideshow-arrow-right");
const cross = document.getElementById("js-slideshow-cross");
const chosenImageElement = document.getElementById("js-slideshow-main-image");

const collageSlideshow = new CollageSlideshow(chosenImageElement);

collageImages.forEach(image => {
  image.addEventListener("click", () => {
    collageSlideshow.loadSlideShow(collageImages);
    collageSlideshow.getChosenImageIndex(image);
    collageSlideshow.updateDisplay();
  });
});

cross.addEventListener("click", () => {
  collageSlideshow.deleteSlideShow();
  collageSlideshow.updateDisplay();
});

arrrowLeft.addEventListener("click", () => {
  collageSlideshow.slideLeft();
  collageSlideshow.updateDisplay();
});

arrrowRight.addEventListener("click", () => {
  collageSlideshow.slideRight();
  collageSlideshow.updateDisplay();
});
