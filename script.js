"use strict";

//changinfg quest to number
// document.querySelector(".number").textContent =
//   document.querySelector(".guess").value;

let score = 10;

//generating randoj=m number

let randNum = Math.trunc(Math.random() * 10) + 1;
console.log(randNum + " hello");

//highScre check updating
let highscore = 0;

const highScore = (newScore) => {
  if (Number(newScore) > highscore) highscore = newScore;
  console.log(highscore);
  document.querySelector(".highscore").textContent = highscore;
};

const query = function () {
  const valueEntered = Number(document.querySelector(".guess").value);

  //to check the boundary - start

  if (valueEntered > 10 || valueEntered < 1) {
    document.querySelector(".message").textContent =
      "🚧 Enter between 1 - 10 🚧 ";

    document.querySelector(".message").style.color = "yellow";
  }
  //to check the boundary - end

  //input -> output match check -start
  else {
    document.querySelector(".number").textContent = valueEntered;
    if (valueEntered === randNum) {
      document.querySelector(".number").style.color = "green";

      document.getElementById("hint").innerHTML = " 😍😎";
      changeBackground();
      highScore(score);
    } else {
      score--;
      document.querySelector(".number").style.color = "red";
      document.querySelector(".message").textContent = " Wrong answer 😐";
      document.querySelector(".message").style.color = "red";
      if (valueEntered > randNum)
        document.querySelector("#hint").textContent = " 🚧 too high 🚧";
      else {
        document.getElementById("hint").innerHTML = " 🚧 too low 🚧 ";
      }
    }
  }

  document.querySelector(".score").textContent = score;
};

// -- again button works
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".score").textContent = score = 10;

  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.color = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("#hint").textContent = " ";
  randNum = Math.trunc(Math.random() * 10) + 1;
});

const changeBackground = () => {
  document.querySelector("body").style.backgroundColor = "green";
  document.querySelector(".message").textContent = " Correct answer 🤩";
  document.querySelector(".message").style.color = "white";
};

//enter to submit function
const ipToSubmit = document.querySelector(".guess");
ipToSubmit.addEventListener(`keyup`, function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    document.querySelector(".check").click();
    document.querySelector(".guess").value = "";
  }
});
