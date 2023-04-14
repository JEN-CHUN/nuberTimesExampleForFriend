"use strict";

const resultNumber = localStorage.getItem("number");
const title = document.querySelector(".title");
const answerList = document.querySelector(".answer");

title.innerText = `以下是答案，不印出${resultNumber}X${resultNumber}`;

Number(resultNumber) <= 9 ? printNum(9) : printNum(Number(resultNumber));

function printNum(range) {
  let result = "";
  for (let i = 0; i < range; i++) {
    const number = Number(resultNumber);
    if (number !== i + 1) {
      result += `<li class="answer__item">${number}X${i + 1}=${
        number * (i + 1)
      }</li>`;
    }
  }
  answerList.innerHTML = result;
}
