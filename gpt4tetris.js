/*let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let blockWidth = 20;
let blockHeight = 20;
let boardWidth = canvas.width / blockWidth;
let boardHeight = canvas.height / blockHeight;
let board = [];

// Inicializar el tablero de juego
for (let i = 0; i < boardHeight; i++) {
  board[i] = [];
  for (let j = 0; j < boardWidth; j++) {
    board[i][j] = 0;
  }
}

// Definir diferentes formas de bloques
let shapes = [
  [
    [1, 1],
    [1, 1]
  ],
  [
    [1, 0],
    [1, 0],
    [1, 1]
  ],
  [
    [0, 1],
    [0, 1],
    [1, 1]
  ],
  [
    [1, 1, 0],
    [0, 1, 1]
  ],
  [
    [0, 1, 1],
    [1, 1, 0]
  ],
  [
    [1, 0, 0],
    [1, 1, 1]
  ],
  [
    [0, 0, 1],
    [1, 1, 1]
  ]
];

// Definir la clase Block
function Block(shape, x, y) {
  this.shape = shape;
  this.x = x;
  this.y = y;
}

// Dibujar un bloque en el canvas
Block.prototype.draw = function() {
  for (LET i = 0; i < this.shape.length; i++) {
    for (let j = 0; j < this.shape[i].length; j++) {
      if (this.shape[i][j]) {
        ctx.fillRect((this.x + j) * blockWidth, (this.y + i) * blockHeight, blockWidth, blockHeight);
      }
    }
  }
};

// Mover un bloque hacia abajo
Block.prototype.moveDown = function() {
  if (this.canMove(0, 1)) {
    this.y++;
  } else {
    this.freeze();
    newBlock();
  }
};

// Mover un bloque hacia la izquierda
Block.prototype.moveLeft = function() {
  if (this.canMove(-1, 0)) {
    this.x--;
  }
};

// Mover un bloque hacia la derecha
Block.prototype.moveRight = function() {
  if (this.canMove(1, 0)) {
    this.x++;
  }
};

// Rotar un bloque
Block.prototype.rotate = function() {
  let rotated = [];
  for (let i = 0; i < this.shape[0].length; i++) {
    rotated[i] = [];
    for (let j = 0; j < this.shape.length; j++) {
      rotated[i][j] = this.shape[this.shape.length - j - 1][i];
    }
  }
  if (this.canRotate(rotated)) {
    this.shape = rotated;
  }
};

// Comprobar si un bloque puede moverse a la posición dada
Block.prototype.canMove = function(dx, dy) {
  for (let i = 0; i < this.shape.length; i++) {
    for (let j =
*/
