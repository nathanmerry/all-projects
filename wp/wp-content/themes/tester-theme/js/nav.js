// Use media queries for hiding / showing the btn and nav menus regarding the size of the brower

const mediaTablet = window.matchMedia("(max-width: 768px)");
const mediaMobile = window.matchMedia("(max-width: 425px)");
const navToggle = document.getElementById("js-nav-toggle");
const navItems = document.getElementById("js-nav-popup");
const navContainer = document.getElementById("js-nav-popup-container");


const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const hideShowNavItems = () => {
  if (mediaTablet.matches) {
    switchClass(navToggle, "is-active", "is-inactive");
    switchClass(navItems, "is-inactive--nav", "is-active--nav");
    switchClass(navContainer, "is-inactive--nav", "is-active--nav");
  } else {
    switchClass(navItems, "is-active--nav", "is-inactive--nav");
    switchClass(navToggle, "is-inactive", "is-active");
    switchClass(navContainer, "is-active--nav", "is-inactive--nav");
  }
};

const hideShowNavItemsClick = () => {
  if (navItems.classList.contains("is-inactive--nav")) {
    switchClass(navItems, "is-active--nav", "is-inactive--nav");
    switchClass(navContainer, "is-active--nav", "is-inactive--nav");
    navToggle.classList.add("change");
  } else {
    switchClass(navItems, "is-inactive--nav", "is-active--nav");
    switchClass(navContainer, "is-inactive--nav", "is-active--nav");

    navToggle.classList.remove("change");
  }
};

navToggle.addEventListener("click", hideShowNavItemsClick);
mediaTablet.addListener(hideShowNavItems);
// mediaMobile.addListener(hideShowNavCTA);
hideShowNavItems();
