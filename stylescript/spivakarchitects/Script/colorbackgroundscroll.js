const layer = document.getElementById("js-hero-layer");
const footerLayer = document.getElementById("js-hero-footer-layer");

const navHeader = document.getElementById("js-nav-header");
const navItems = document.getElementById("js-nav-main-items");

const containerHeight = (screen.height / 10) * 8;
const scrollTopVar = document.documentElement.scrollTop;
const minOpticity = 0.2;

let layerOpacity = minOpticity;
let footerLayerOpacity = 1;

footerLayer.style.opacity = footerLayerOpacity;
layer.style.opacity = layerOpacity;

const changeLayerOpactiy = () => {
  if (document.documentElement.scrollTop / containerHeight > minOpticity) {
    layerOpacity = document.documentElement.scrollTop / containerHeight;
  } else {
    layerOpacity = minOpticity;
  }
  layer.style.opacity = layerOpacity;

};

const changeFooterLayerOpactiy = () => {
  footerLayerOpacity = 1 - document.documentElement.scrollTop / containerHeight;
  footerLayer.style.opacity = footerLayerOpacity;

};

window.addEventListener("scroll", () => {
  if (
    document.documentElement.scrollTop < containerHeight &&
    document.body.scrollTop < containerHeight
  ) {
    changeLayerOpactiy();
    changeFooterLayerOpactiy()
    switchClass(navHeader, "theme-white", "theme-dark");
    switchClass(navItems, "theme-white", "theme-dark");
  } else {
    switchClass(navHeader, "theme-dark", "theme-light");
    switchClass(navItems, "theme-dark", "theme-light");
  }
});
