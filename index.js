"use strict";
const botton = document.querySelector(".form__result");

botton.addEventListener("click", (event) => {
  event.preventDefault();
  const startTest = () => {
    const questionOne = +document.querySelector("#question1").value;
    const questionTwo = +document.querySelector("#question2").value;
    const questionThree = +document.querySelector("#question3").value;
    const questionFour = +document.querySelector("#question4").value;
    const questionFive = +document.querySelector("#question5").value;
    const form = document.querySelector(".form");
    let answer = 0;

    if (questionOne === 4) {
      answer++;
    }

    if (questionTwo === 10) {
      answer++;
    }

    if (questionThree === 3) {
      answer++;
    }

    if (questionFour === 1) {
      answer++;
    }

    if (questionFive === 9) {
      answer++;
    }

    alert(`Правильных ответов: ${answer}`);
    form.reset();
  };

  startTest();
});
