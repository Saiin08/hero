const hero = document.querySelector(".hero");
hero.style.top = "500px";
hero.style.left = "100px";

const ghost = document.querySelector(".ghost");
ghost.style.top = "200px";
ghost.style.left = "600px";

const treasure = document.querySelector(".treasure");
treasure.style.top = "0px";
treasure.style.left = "400px";

const map = document.querySelector(".map");
let gameOver = false;

let perStep = 100;

document.addEventListener("keydown", (event) => {
  if (!gameOver) {
    let heroTop = parseInt(hero.style.top);
    let heroLeft = parseInt(hero.style.left);
    switch (event.key) {
      case "w":
      case "W":
      case "ArrowUp":
        if (heroTop - perStep >= 0) {
          hero.style.top = heroTop - perStep + "px";
        }
        break;

      case "s":
      case "S":
      case "ArrowDown":
        if (heroTop + perStep <= 500) {
          hero.style.top = heroTop + perStep + "px";
        }
        break;

      case "a":
      case "A":
      case "ArrowLeft":
        if (heroLeft - perStep >= 0) {
          hero.style.left = heroLeft - perStep + "px";
        }
        break;

      case "d":
      case "D":
      case "ArrowRight":
        if (heroLeft + perStep <= 700) {
          hero.style.left = heroLeft + perStep + "px";
        }
        break;

      default:
        break;
    }
    win();
    lose();
  }
});

// let the ghost follow the hero
setInterval(() => {
  if (!gameOver) {
    let ghostRun = Math.round(Math.random());
    let ghostTop = parseInt(ghost.style.top);
    let ghostLeft = parseInt(ghost.style.left);
    let heroTop = parseInt(hero.style.top);
    let heroLeft = parseInt(hero.style.left);
    if (ghostRun) {
      if (ghostTop > heroTop) {
        ghost.style.top = ghostTop - perStep + "px";
      } else if (ghostTop < heroTop) {
        ghost.style.top = ghostTop + perStep + "px";
      }

      if (ghostLeft > heroLeft) {
        ghost.style.left = ghostLeft - perStep + "px";
      } else if (ghostLeft < heroLeft) {
        ghost.style.left = ghostLeft + perStep + "px";
      }
    }
    win();
    lose();
  }
}, 500);

const resetGame = () => {
  hero.style.top = "500px";
  hero.style.left = "100px";
  ghost.style.top = "200px";
  ghost.style.left = "600px";
  treasure.style.top = "0px";
  treasure.style.left = "400px";
  map.style.opacity = "1";
  gameOver = false;
};

const win = () => {
  if (
    parseInt(hero.style.top) === parseInt(treasure.style.top) &&
    parseInt(hero.style.left) === parseInt(treasure.style.left)
  ) {
    map.style.opacity = "0.5";
    setTimeout(() => {
      alert("You Win The Game ! 🎉");
      gameOver = true;
      resetGame();
    }, 100);
  }
};

const lose = () => {
  if (
    parseInt(ghost.style.top) === parseInt(hero.style.top) &&
    parseInt(ghost.style.left) === parseInt(hero.style.left)
  ) {
    map.style.opacity = "0.5";
    setTimeout(() => {
      alert("You Lost The Game ! 💩");
      gameOver = true;
      resetGame();
    }, 100);
  }
};
