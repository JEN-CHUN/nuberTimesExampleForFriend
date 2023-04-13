"use strict";

const number = document.querySelector(".input__input");
const sumbitButton = document.querySelector(".input__submit");
console.log(number.value);

sumbitButton.addEventListener("click", () => {
  event.preventDefault();
  let input = Number(number.value);
  console.log(input);
  console.log(typeof input);
  if ( isNaN(input) || (input < 0 || input > 9)) {
    number.value = null;
    alert('所輸入的資料並不在範圍內或是有誤，請重新輸入')
  }else{
    localStorage.setItem('number',input)
    location.href = "result.html";
  }
});
