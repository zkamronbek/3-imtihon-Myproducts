const burger = document.querySelector(".header__burger");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

burger.addEventListener("click", function() {
  burger.classList.toggle("header__burger--opened");
  nav.classList.toggle("header__nav--opened");
  body.classList.toggle("freez")
});

const question = document.querySelector(".questions__item-title");

question.addEventListener("click",function (){
question .classList.toggle("questions__togler--opened")
});


