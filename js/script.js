const toggleButtonLeft = document.querySelector(".toggle-button-left");
const leftSideNavbar = document.querySelector(".left-side-navbar");

toggleButtonLeft.addEventListener("click", () => {
  leftSideNavbar.classList.toggle("active");
});

const toggleButtonRight = document.querySelector(".toggle-button-right");
const rightSideNavbar = document.querySelector(".right-side-navbar");

toggleButtonRight.addEventListener("click", () => {
  rightSideNavbar.classList.toggle("active");
});

// document.addEventListener("DOMContentLoaded", () => {
//   const toggleButtonRight = document.querySelector(".toggle-button-right");
//   const navbarLinks1 = document.querySelector(".navbar-links1");

//   if (toggleButtonRight) {
//     toggleButtonRight.addEventListener("click", () => {
//       navbarLinks1.classList.toggle("active");
//     });
//   }
// });
