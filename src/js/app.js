 const gameBoard = document.querySelector('.game-board');

const createGoblin = () => {
  const img = document.createElement("img");
  img.src = "https://raw.githubusercontent.com/netology-code/ahj-homeworks/refs/heads/AHJ-50/dom/pic/goblin.png";
  img.style.width = "100%";
  img.style.height = "100%";
  return img;
  }
const moveGoblin = (img) => {
  const holes = gameBoard.children;
  let currentIndex = Math.floor(Math.random() * holes.length);
  holes[currentIndex].appendChild(img);

  setInterval(() => {
    const newIndex = Math.floor(Math.random() * holes.length);
    if (newIndex !== currentIndex) {
      holes[newIndex].appendChild(img);
      currentIndex = newIndex;
    }
  }, 1000);
}; 
  const initGame = () => {
  const goblin = createGoblin();
  moveGoblin(goblin);
};

window.onload = initGame;
