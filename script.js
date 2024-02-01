let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage = "./images/dice" + randomNumber1 + ".png";

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImage);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "./images/dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImage2);

let playerWin = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  playerWin.innerHTML = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1) {
  playerWin.innerHTML = "Player 2 Wins 🚩";
} else {
  playerWin.innerHTML = "🎌Draw!🎌";
}
