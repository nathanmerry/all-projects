const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const navToggle = document.getElementById("js-nav-toggle");
const navPopup = document.getElementById("js-nav-popup");
const navToggleArr = document.querySelectorAll("[data-nav-toggle]");
const navItemBasic = document.getElementById("js-item-basic");
const navItemAdvanced = document.getElementById("js-item-advanced");
const calcRowContainers = document.querySelectorAll("[data-btn-container]");
const btnsAdvanced = document.querySelectorAll("[data-advanced]");
const title = document.getElementById("js-title");

document.addEventListener("click", e => {
  if (event.target.id != "js-nav-toggle") {
    switchClass(navPopup, "is-inactive", "is-active");
  }
});

navToggle.addEventListener("click", event => {
  if (navPopup.classList.contains("is-inactive")) {
    switchClass(navPopup, "is-active", "is-inactive");
  } else {
    switchClass(navPopup, "is-inactive", "is-active");
  }
});

navItemBasic.addEventListener("click", () => {
  calcRowContainers.forEach(row => {
    switchClass(row, "col-4", "col-5");
  });
  btnsAdvanced.forEach(btn => {
    switchClass(btn, "is-inactive", "is-active");
  });
  title.innerText = "Basic Calculator";
});

navItemAdvanced.addEventListener("click", () => {
  calcRowContainers.forEach(row => {
    switchClass(row, "col-5", "col-4");
  });
  btnsAdvanced.forEach(btn => {
    switchClass(btn, "is-active", "is-inactive");
  });
  title.innerText = "Advanced Calculator";
});
