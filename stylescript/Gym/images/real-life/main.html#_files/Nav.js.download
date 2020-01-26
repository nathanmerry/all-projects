var mediaTablet = window.matchMedia("(max-width: 768px)");
var dropItems = document.getElementById("navDropdown");
let clicked = false;
var scrolling = false;

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

window.addEventListener("scroll", () => {
  scrolling = true;
});

const navToggle = {
  listner() {
    return mediaTablet.matches
      ? dropItems.classList.add("no-show")
      : switchClass(dropItems, "nav", "no-show");
  },

  dropDown() {
    if (!clicked) {
      switchClass(dropItems, "no-show--visible", "no-show--invisible");
      clicked = true;
    } else {
      switchClass(dropItems, "no-show--invisible", "no-show--visible");
      clicked = false;
    }
  },

  navScroll() {
    const header = document.getElementById("header");
    const logo = document.getElementById("logo");
    const dropItems = document.getElementById("navDropdown");

    if (document.body.scrollTop > 90) {
      // if scroll past certian point
      switchClass(logo, "logo-background-noShow", "logo-background");
      header.classList.add("main-menu--alt");
      dropItems.classList.add("no-show--scroll");
    } else {
      switchClass(logo, "logo-background", "logo-background-noShow");
      switchClass(header, "main-menu", "main-menu--alt");
      switchClass(dropItems, "no-show", "no-show--scroll");
    }
  }
};

mediaTablet.addListener(navToggle.listner);

setInterval(() => {
  if (scrolling) {
    navToggle.navScroll();
  }
}, 250);
