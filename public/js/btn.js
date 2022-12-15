const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

function hideNavbar() {
  var x = document.getElementById(".mobile-menu");
  if (menu.classList.toggle !== "hidden") {
    menu.classList.add("hidden");
  }
}
hideNavbar();
