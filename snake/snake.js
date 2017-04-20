// settings
var snakeX = 2;
var snakeY = 2;
var height = 30;
var width = 30;
var gameInterval = 100;
var increment = 1;

// variables
var tailX;
var tailY;
var fX;
var fY;
var running;
var gameOver;
var direction = -1; // -1 = down, 0 = up , 1 = left, 2 = right


  /**
  * Entry point for the game
  */
function run() {
  init();
  int = setInterval(gameLoop, interval);
}

function init() {
  createMap();
  createSnake();
  createFruit();
}


// Random location for fruit

// Controls

// loop
