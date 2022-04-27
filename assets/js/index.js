document.getElementById("year").innerHTML = new Date().getFullYear();


// nav menu responsiveness

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hidden-menu");
const accessButton = document.querySelector(".early");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  accessButton.classList.toggle("active");
})