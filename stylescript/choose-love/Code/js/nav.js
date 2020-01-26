const mediaTablet = window.matchMedia("(max-width: 768px)");
const mediaMobile = window.matchMedia("(max-width: 375px)");
const navToogle = document.getElementById("js-navToggle");
const navItemsBlock = document.getElementById("js-nav-main-block");
const navItemsPopup = document.getElementById("js-nav-main-popup");
const navBtn = document.getElementById("js-nav-btn");

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};
const hideShowNavItems = () => {
  if (mediaTablet.matches) {
    switchClass(navToogle, "is-active", "is-inactive");
    switchClass(navItemsBlock, "is-inactive", "is-active");
  } else {
    switchClass(navItemsPopup, "is-inactive", "is-active");
    switchClass(navItemsBlock, "is-active", "is-inactive");
    switchClass(navToogle, "is-inactive", "is-active");
  }
};
const hideShowNavItemsClick = () => {
  if (navItemsPopup.classList.contains("is-inactive")) {
    switchClass(navItemsPopup, "is-active", "is-inactive");
  } else {
    switchClass(navItemsPopup, "is-inactive", "is-active");
  }
};

const hideShowNavCTA = () => {
  if (mediaMobile.matches) {
    switchClass(navBtn, "is-inactive", "is-active");
    console.log('matches')
  } else {
    switchClass(navBtn, "is-active", "is-inactive");
  }
};

navToogle.addEventListener("click", hideShowNavItemsClick);
mediaTablet.addListener(hideShowNavItems);
mediaMobile.addListener(hideShowNavCTA);
hideShowNavItems();
