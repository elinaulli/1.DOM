import Icon from "../img/goblin.png";
const container = document.querySelector(".game-container");
const gameBoard = container.querySelector(".game-board");

document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    gameBoard.append(cell);
  }

  const cellAll = Array.from(document.querySelectorAll(".cell"));

  const img = document.createElement("img");
  img.src = Icon;
  img.classList.add("img-goblin");
  img.alt = "Гоблин";

  let currentIndex = -1;

  function getItem() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cellAll.length);
    } while (newIndex === currentIndex);
    currentIndex = newIndex;
    return cellAll[newIndex];
  }

  function moveGoblin() {
    const item = getItem();
    item.append(img);
  }

  setInterval(moveGoblin, 1000);
});
