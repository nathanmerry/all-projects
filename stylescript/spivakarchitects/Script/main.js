const navToggle = document.getElementById("js-navToggle");
const navPopupItems = document.getElementById("js-nav-popup-items");
const body = document.getElementById("js-body");
const navActive = "nav-popup-active";
const navInactive = "nav-popup-inactive";

const navToggleActive = "nav-toggle-active"
const navToggleInactive = "nav-toggle-inactive"

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const showHideNavOutsideClick = event => {
  const isClickInside =
    navPopupItems.contains(event.target) || navToggle.contains(event.target);
  if (!isClickInside) {
    switchClass(navPopupItems, navInactive, navActive);
    switchClass(navToggle, navToggleActive, navToggleInactive);
  }
};

const showHideNavToggleButton = () => {
  if (navPopupItems.classList.contains(navInactive)) {
    switchClass(navPopupItems, navActive, navInactive);
    switchClass(navToggle,navToggleInactive, navToggleActive);
  } else {
    switchClass(navPopupItems, navInactive, navActive);
    switchClass(navToggle,navInactive , navToggleInactive);
  }
};

document.addEventListener("click", showHideNavOutsideClick);
navToggle.addEventListener("click", showHideNavToggleButton);
