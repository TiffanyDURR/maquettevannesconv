const buttonMenu = document.querySelector(".button-menu");
const mobileMenu = document.querySelector(".mobile-menu");

buttonMenu.addEventListener("click", () => {
  if (mobileMenu.classList.contains("visible")) {
    mobileMenu.classList.add("slide-out");
    setTimeout(() => {
      mobileMenu.classList.remove("visible");
      mobileMenu.classList.remove("slide-out");
    }, 500);
  } else {
    mobileMenu.classList.add("visible");
  }
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".nav-menu") &&
    !event.target.closest(".button-menu") &&
    mobileMenu.classList.contains("visible")
  ) {
    mobileMenu.classList.add("slide-out");
    setTimeout(() => {
      mobileMenu.classList.remove("visible");
      mobileMenu.classList.remove("slide-out");
    }, 500);
  }
});
