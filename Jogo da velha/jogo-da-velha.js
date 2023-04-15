let board = ['', '', '', '', '', '', '', '', ''];
let player = 'X';
let gameover = false;
let result = document.getElementById('result');

function drawBoard() {
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).textContent = board[i];
  }
}

function checkWin() {
  if (board[0] !== '' && board[0] === board[1] && board[1] === board[2]) {
    return board[0];
  }
  if (board[3] !== '' && board[3] === board[4] && board[4] === board[5]) {
    return board[3];
  }
  if (board[6] !== '' && board[6] === board[7] && board[7] === board[8]) {
    return board[6];
  }
  if (board[0] !== '' && board[0] === board[3] && board[3] === board[6]) {
    return board[0];
  }
  if (board[1] !== '' && board[1] === board[4] && board[4] === board[7]) {
    return board[1];
  }
  if (board[2] !== '' && board[2] === board[5] && board[5] === board[8]) {
    return board[2];
  }
  if (board[0] !== '' && board[0] === board[4] && board[4] === board[8]) {
    return board[0];
  }
  if (board[2] !== '' && board[2] === board[4] && board[4] === board[6]) {
    return board[2];
  }
  if (board.every(cell => cell !== '')) {
    return 'tie';
  }
  return null;
}

function handleResult() {
  let winner = checkWin();
  if (winner) {
    gameover = true;
    if (winner === 'tie') {
      result.textContent = 'Empate!';
    } else {
      result.textContent = `O jogador ${winner} venceu!`;
    }
  }
}

function handleClick(event) {
  console.log('Célula clicada');
  let cellIndex = event.target.id;

  if (board[cellIndex] !== '') {
    return;
  }
  document.getElementById("restart").addEventListener("click", function() {
    init();
  });
  
  board[cellIndex] = player;
  drawBoard();
  handleResult();

  if (!gameover) {
    player = player === 'X' ? 'O' : 'X';
  }
}

function init() {
  board = ['', '', '', '', '', '', '', '', ''];
  player = 'X';
  gameover = false;
  result.textContent = '';
  drawBoard();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init();
  document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleClick));
});