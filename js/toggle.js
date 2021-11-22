let main = document.querySelector(".main");
let navigation = document.querySelector(".navigation");
let topbar = document.querySelector(".topbar");
let toggle = document.querySelector(".toggle");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  topbar.classList.toggle("active");
  toggle.classList.toggle("active");
  main.classList.toggle("active");
};

//Menu mobile, ajustar menu de navegação//
function toggleMenu() {
  let main = document.querySelector(".main");
  let navigation = document.querySelector(".navigation");
  main.classList.remove("active");
  navigation.classList.remove("active");
}
