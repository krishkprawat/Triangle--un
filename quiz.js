const quizForm = document.querySelector(".quiz-form");
const btn = document.querySelector("#submit");
const output = document.querySelector("#output");

const answers = ["180", "right angle", "Isosceles", "False"];

function calculationScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(quizForm);
  for (let value of formResult.values()) {
    if (value === answers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = "your score is :" + score;
}

btn.addEventListener("click", calculationScore);
