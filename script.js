// ===> scores
const pScore = document.querySelector(".p-score");
const bScore = document.querySelector(".b-score");

// ===> win message
const winMessage = document.querySelector("h1");
// ===> images
const userImg = document.querySelectorAll(".player");
const systemImg = document.querySelectorAll(".system");

// ===> form background
const form = document.querySelector(".p1");
const form2 = document.querySelector(".p2");

// ===> change color
form.addEventListener("mousemove", (e) => {
  // ===> responsive positions
  let leftPos = e.clientX - form.getBoundingClientRect().left;
  let topPos = e.clientY - form.getBoundingClientRect().top;
  // ===> set the positions
  form.style.setProperty("--x", leftPos + "px");
  form.style.setProperty("--y", topPos + "px");
});
form2.addEventListener("mousemove", (e) => {
  // ===> responsive positions
  let leftPos = e.clientX - form2.getBoundingClientRect().left;
  let topPos = e.clientY - form2.getBoundingClientRect().top;
  // ===> set the positions
  form2.style.setProperty("--x2", leftPos + "px");
  form2.style.setProperty("--y2", topPos + "px");
});

// ===> users choice and systems choice
let userChoice = "";
let randomeChoice = 0;

// ===> players score and systems score
let playerScore = 0;
let systemScore = 0;

// ===> click handler
userImg.forEach((event) => {
  event.addEventListener("click", () => {
    // ===> play sound effect
    let sound = new Audio("clickSound.mp3");
    sound.play();
    // ===> hide all the systems images
    systemImg[0].classList.add("hide");
    systemImg[1].classList.add("hide");
    systemImg[2].classList.add("hide");
    // ===> get the users choice
    userChoice = event.className;
    // ===> systems turn
    systemTurn();
  });
});

// ===> systems Turn
function systemTurn() {
  // ===> get the systems choice
  randomeChoice = Math.floor(Math.random() * 3);
  // ===> check who will get the score
  checkScore();
}

// ===> check score
function checkScore() {
  // ===> check if players choice is rock
  if (userChoice == "player p-r") {
    // ==> if systems choice is rock
    if (randomeChoice == 0) {
      systemImg[0].classList.remove("hide");
    }
    // ===> if systems choice is paper
    if (randomeChoice == 1) {
      systemScore++;
      systemImg[1].classList.remove("hide");
    }
    // ===> if systems choice is scissor
    if (randomeChoice == 2) {
      playerScore++;
      systemImg[2].classList.remove("hide");
    }
  }
  // ===> check if players choice is paper
  if (userChoice == "player p-p") {
    // ==> if systems choice is rock
    if (randomeChoice == 0) {
      playerScore++;
      systemImg[0].classList.remove("hide");
    }
    // ===> if systems choice is paper
    if (randomeChoice == 1) {
      systemImg[1].classList.remove("hide");
    }
    // ===> if systems choice is scissor
    if (randomeChoice == 2) {
      systemScore++;
      systemImg[2].classList.remove("hide");
    }
  }
  // ===> check if players choice is scissor
  if (userChoice == "player p-s") {
    // ==> if systems choice is rock
    if (randomeChoice == 0) {
      systemScore++;
      systemImg[0].classList.remove("hide");
    }
    // ===> if systems choice is paper
    if (randomeChoice == 1) {
      playerScore++;
      systemImg[1].classList.remove("hide");
    }
    // ===> if systems choice is scissor
    if (randomeChoice == 2) {
      systemImg[2].classList.remove("hide");
    }
  }
  // ===> update scores
  pScore.innerHTML = "player score: " + playerScore;
  bScore.innerHTML = "system score: " + systemScore;
  // ===> check if there is any wins
  checkWin();
}
// ===> win sound effect
let winSound = new Audio("winSound.mp3");
// ===> lose sound effect
let evilSound = new Audio("evilSound.mp3");
// ===> check win
function checkWin() {
  // ===> check player score
  if (playerScore == 5) {
    // ===> show win message
    winMessage.classList.remove("hide");
    // ===> play win sound effect
    winSound.play();
    // ===> refresh the page
    setTimeout(() => {
      clear();
    }, 2500);
  }
  // ===> check systems score
  if (systemScore == 5) {
    // ===> play lose sound
    evilSound.play();
    // ===> show lose message
    winMessage.innerHTML = "You lost!";
    winMessage.classList.remove("hide");
    // ===> refresh the page
    setTimeout(() => {
      clear();
    }, 5200);
  }
}

// ===> clear the game
function clear() {
  // ===> refresh the page
  location.reload();
}
