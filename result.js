"use strict";

const resultNumber = localStorage.getItem("number");
const title = document.querySelector(".title");
const answerList = document.querySelector(".answer");
console.log(resultNumber);
title.innerText = `以下是答案，不印出${resultNumber}X${resultNumber}`;

for (let i = 0; i < 9; i++) {
  const number = Number(resultNumber);
  if (number !== (i+1)) {
    answerList.innerHTML += `<li class="answer__item">${number}X${i + 1}=${
      number * (i + 1)
    }</li>`;
  }
}
