import Icon from "../img/goblin.png";
const container = document.querySelector(".game-container");
const gameBoard = container.querySelector(".game-board");

const createCellInBord = () => {
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.append(cell);
  }
};
const createGoblin = () => {
  const img = document.createElement("img");
  img.src = Icon;
  img.classList.add("img-goblin");
  img.alt = "Гоблин";
  return img;
};
const moveGoblin = (img) => {
  const cellsAll = container.querySelectorAll(".cell");

  function GetIndex() {
    let currentIndex = 0;
    const newIndex = Math.floor(Math.random() * cellsAll.length);
    do {
      cellsAll[newIndex].append(img);
      currentIndex = newIndex;
    } while (currentIndex !== newIndex);
  }
  setInterval(GetIndex, 1000);
};

const initGame = () => {
  createCellInBord();
  const goblin = createGoblin();
  moveGoblin(goblin);
};

window.onload = initGame;
