//Dark e light mode (trocar)
let themeSwitch = document.querySelector(".themeSwitch");
let body = document.querySelector("body");

themeSwitch.onclick = function () {
  body.classList.toggle("dark");
};
