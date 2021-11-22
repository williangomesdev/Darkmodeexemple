//Ativar e destivar a classe active dinamicamente
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
