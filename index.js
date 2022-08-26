let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeCount = 0;
let guestCount = 0;

//update score for home and away
function addScore(type, num) {
  if (type === "home") {
    homeCount += num;
    homeScore.innerText = homeCount;
  } else {
    guestCount += num;
    guestScore.innerText = guestCount;
  }
  if (homeCount > guestCount) {
    homeScore.style.boxShadow = "0 0 0 1px red";
    guestScore.style.boxShadow = "none";
  } else if (homeCount < guestCount) {
    guestScore.style.boxShadow = "0 0 0 1px red";
    homeScore.style.boxShadow = "none";
  }
}

//start a new game
function newGame() {
  homeCount = 0;
  homeScore.innerText = homeCount;
  guestCount = 0;
  guestScore.innerText = guestCount;
  homeScore.style.boxShadow = "none";
  guestScore.style.boxShadow = "none";
}
