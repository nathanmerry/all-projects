const testimonials = {
  test1: document.getElementById("testimonial1"),
  test2: document.getElementById("testimonial2"),
  test3: document.getElementById("testimonial3"),
  test4: document.getElementById("testimonial4"),
  test5: document.getElementById("testimonial5"),
  test6: document.getElementById("testimonial6"),
  test7: document.getElementById("testimonial7"),
  test8: document.getElementById("testimonial8"),
  test9: document.getElementById("testimonial9")
};

let testimonialsArr = Object.values(testimonials);
let dots = document.getElementsByClassName("icon-dot");

let slideIndex = 0;

const plusSlides = (n, c) => {
  slideIndex = slideIndex + n;
  showSlides(slideIndex, c);
};

const currentSlide = (n, c) => {
  slideIndex = n;
  showSlides(slideIndex, c);
};

const showSlides = (d, c) => {
  let h;
  if (slideIndex > 0) {
    d = slideIndex * c;
    h = d + c;
  }
  if (h > testimonialsArr.length) {
    slideIndex = 0;
  }
  if (d < 0) {
    slideIndex = testimonialsArr.length / c - 1;
  }
  d = slideIndex * c;
  h = d + c;

  testimonialsArr.map((item, index) => {
    if (index > d - 1 && index < h) {
      switchClass(item, "active", "non-active");
    } else {
      switchClass(item, "non-active", "active");
    }
  });

  for (let i = 0; i < dots.length; i++) {
    if (i === slideIndex) {
      switchClass(dots[i], "icon-dot--dark", "icon-dot--light");
    } else {
      switchClass(dots[i], "icon-dot--light", "icon-dot--dark");
    }
  }
};

showSlides(slideIndex, 3);

let test = document.getElementById("test");


