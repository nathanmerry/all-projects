const mainContent = document.getElementById("main-content");
const googleMap = document.getElementById("google-map");
const toggleMapBtn = document.getElementById("js-toggle-map-btn");
const mediaTablet = window.matchMedia("(max-width: 768px)");
const btnMapContent = "Show Map";
const btnMainContent = "Show List";

const switchClass = (id, classAdd, classRemove) => {
  let add = id.classList.add(classAdd);
  let remove = id.classList.remove(classRemove);
  return { add, remove };
};

const isGoogleMapDesktop = () => {
  if (mediaTablet.matches) {
    switchClass(googleMap, "is-inactive", "is-active");
    switchClass(mainContent, "is-active", "is-inactive");
    switchClass(toggleMapBtn, "is-active", "is-inactive");
  } else {
    switchClass(googleMap, "is-active", "is-inactive");
    switchClass(mainContent, "is-active", "is-inactive");
    switchClass(toggleMapBtn, "is-inactive", "is-active");

  }
};

const toggleGoogleMap = () => {
  if (googleMap.classList.contains("is-inactive")) {
    switchClass(googleMap, "is-active", "is-inactive");
    switchClass(mainContent, "is-inactive", "is-active");
    toggleMapBtn.innerHTML = "Show List"
  } else {
    switchClass(googleMap, "is-inactive", "is-active");
    switchClass(mainContent, "is-active", "is-inactive");
    toggleMapBtn.innerHTML = "Show Map"
  }
};

toggleMapBtn.addEventListener("click", () => {
  toggleGoogleMap();
});

mediaTablet.addListener(isGoogleMapDesktop);
isGoogleMapDesktop();
