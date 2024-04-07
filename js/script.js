let countMove = 0;
let move = "";
const planetBackground = document.querySelector(".move__planet");
const starBackground = document.querySelector(".move__star");

const planetMoveElement = document.querySelector("div.js-planet-move");
const planetDisableElement = document.querySelector("div.js-planet-disable");
const starMoveElement = document.querySelector("div.js-star-move");
const starDisableElement = document.querySelector("div.js-star-disable");

let scoreGame = JSON.parse(localStorage.getItem("scoreGame")) || {
  planet: 0,
  star: 0,
  round: 0,
};

let roundElement = document.querySelectorAll(".js-round");
let planetScore = document.querySelector(".js-score-planet");
let starScore = document.querySelector(".js-score-star");

roundElement.forEach((item) => {
  item.innerHTML = scoreGame.round;
});
planetScore.innerHTML = scoreGame.planet;
starScore.innerHTML = scoreGame.star;

console.log(scoreGame);

const resetScore = () => {
  scoreGame = {
    planet: 0,
    star: 0,
    round: 0,
  };
  localStorage.removeItem("scoreGame");
};

function movingPlanet() {
  planetMoveElement.classList.remove("move__disable");
  planetMoveElement.classList.add("move__include");

  planetDisableElement.classList.remove("move__include");
  planetDisableElement.classList.add("move__disable");

  planetBackground.style.backgroundColor = "#e9b98b";

  starMoveElement.classList.remove("move__include");
  starMoveElement.classList.add("move__disable");

  starDisableElement.classList.remove("move__disable");
  starDisableElement.classList.add("move__include");

  starBackground.style.backgroundColor = "transparent";

  move = "planet";
}

function movingStar() {
  planetMoveElement.classList.remove("move__include");
  planetMoveElement.classList.add("move__disable");

  planetDisableElement.classList.remove("move__disable");
  planetDisableElement.classList.add("move__include");

  planetBackground.style.backgroundColor = "transparent";

  starMoveElement.classList.remove("move__disable");
  starMoveElement.classList.add("move__include");

  starDisableElement.classList.remove("move__include");
  starDisableElement.classList.add("move__disable");

  starBackground.style.backgroundColor = "#c6d4d9";

  move = "star";
}

function choiceWalker() {
  const randomMove = Math.random();
  if (randomMove > 0 && randomMove < 0.5) {
    movingPlanet();
  } else if (randomMove > 0.5 && randomMove < 1) {
    movingStar();
  }
}

choiceWalker();

function changeMove() {
  if (
    planetMoveElement.classList.contains("move__include") &&
    starMoveElement.classList.contains("move__disable")
  ) {
    movingStar();
  } else if (
    planetMoveElement.classList.contains("move__disable") &&
    starMoveElement.classList.contains("move__include")
  ) {
    movingPlanet();
  }
}

// Смена хода
const motionBtn = document.querySelector(".js-btn-motion");
motionBtn.addEventListener("click", () => {
  if (countMove === 0) {
    changeMove();
  }
});

let cells = document.querySelectorAll(".js-cell");
cells.forEach((item) => {
  item.addEventListener("click", () => choiceCell(item));
});

function choiceCell(item) {
  if (
    move === "star" &&
    item.getAttribute("style") !==
      'background-image: url("./images/planet.png");' &&
    item.getAttribute("style") !==
      'background-image: url("./images/star.png");'
  ) {
    item.style.backgroundImage = 'url("./images/star.png")';
    movingPlanet();
  } else if (
    move === "planet" &&
    item.getAttribute("style") !==
      'background-image: url("./images/planet.png");' &&
    item.getAttribute("style") !==
      'background-image: url("./images/star.png");'
  ) {
    item.style.backgroundImage = 'url("./images/planet.png")';
    movingStar();
  }
  checkMove();
  countMove++;
}

function checkMove() {
  let moves = [];

  cells.forEach((item) => {
    moves.push(item.getAttribute("style"));
  });

  let urlPlanet = 'background-image: url("./images/planet.png");';
  let urlStar = 'background-image: url("./images/star.png");';

  const starWins = document.querySelector(".js-star-wins");
  const planetWins = document.querySelector(".js-planet-wins");
  const draw = document.querySelector(".js-draw");

  if (
    moves[0] === urlPlanet &&
    moves[1] === urlPlanet &&
    moves[2] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[3] === urlPlanet &&
    moves[4] === urlPlanet &&
    moves[5] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[6] === urlPlanet &&
    moves[7] === urlPlanet &&
    moves[8] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[0] === urlPlanet &&
    moves[3] === urlPlanet &&
    moves[6] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[1] === urlPlanet &&
    moves[4] === urlPlanet &&
    moves[7] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[2] === urlPlanet &&
    moves[5] === urlPlanet &&
    moves[8] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[0] === urlPlanet &&
    moves[4] === urlPlanet &&
    moves[8] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[2] === urlPlanet &&
    moves[4] === urlPlanet &&
    moves[6] === urlPlanet
  ) {
    planetWins.classList.remove("visually-hidden");
    showRound("planet");
  } else if (
    moves[0] === urlStar &&
    moves[1] === urlStar &&
    moves[2] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[3] === urlStar &&
    moves[4] === urlStar &&
    moves[5] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[6] === urlStar &&
    moves[7] === urlStar &&
    moves[8] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[0] === urlStar &&
    moves[3] === urlStar &&
    moves[6] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[1] === urlStar &&
    moves[4] === urlStar &&
    moves[7] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[2] === urlStar &&
    moves[5] === urlStar &&
    moves[8] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[0] === urlStar &&
    moves[4] === urlStar &&
    moves[8] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[2] === urlStar &&
    moves[4] === urlStar &&
    moves[6] === urlStar
  ) {
    starWins.classList.remove("visually-hidden");
    showRound("star");
  } else if (
    moves[0] !== null &&
    moves[1] !== null &&
    moves[2] !== null &&
    moves[3] !== null &&
    moves[4] !== null &&
    moves[5] !== null &&
    moves[6] !== null &&
    moves[7] !== null &&
    moves[8] !== null
  ) {
    draw.classList.remove("visually-hidden");
    showRound("draw");
  }
}

function showRound(win) {
  if (win === "planet") {
    scoreGame.planet += 1;
    scoreGame.round += 1;

    roundElement.forEach((item) => {
      item.innerHTML = scoreGame.round;
    });

    planetScore.innerHTML = scoreGame.planet;
  } else if (win === "star") {
    scoreGame.star += 1;
    scoreGame.round += 1;

    roundElement.forEach((item) => {
      item.innerHTML = scoreGame.round;
    });

    starScore.innerHTML = scoreGame.star;
  } else if (win === "draw") {
    scoreGame.round += 1;

    roundElement.forEach((item) => {
      item.innerHTML = scoreGame.round;
    });
  }
  localStorage.setItem("scoreGame", JSON.stringify(scoreGame));
}

function cleanField() {
  cells.forEach((item) => {
    item.removeAttribute("style");
  });
}

const nextRoundBtn = document.querySelectorAll(".js-next-round-btn");
nextRoundBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const modalResult = document.querySelectorAll(".modal");

    modalResult.forEach((item) => {
      item.classList.add("visually-hidden");
    });

    countMove = 0;

    cleanField();
    choiceWalker();
  });
});

const restartBtn = document.querySelectorAll(".js-restart-btn");
restartBtn.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const modalResult = document.querySelectorAll(".modal");

    modalResult.forEach((item) => {
      item.classList.add("visually-hidden");
    });

    resetScore();
    planetScore.innerHTML = scoreGame.planet;
    starScore.innerHTML = scoreGame.star;

    roundElement.forEach((item) => {
      item.innerHTML = scoreGame.round;
    });

    countMove = 0;

    cleanField();
    choiceWalker();
  });
  localStorage.setItem("scoreGame", JSON.stringify(scoreGame));
});
