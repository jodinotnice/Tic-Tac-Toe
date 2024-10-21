function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(0);
    }
  }

  function getBoard() {
    return board;
  }

  function updateBoard(row, col, value) {
    if (row <= rows && col <= columns) {
      board[row - 1][col - 1] = value;
    }
  }
  return { getBoard, updateBoard };
}

function playersControl(
  playerOneName = "Player One",
  playerTwoName = "Player Two"
) {
  const player = [
    {
      name: playerOneName,
      token: "X",
    },
    {
      name: playerTwoName,
      token: "O",
    },
  ];

  let getActivePlayer = () => player[0];

  const switchPlayerTurn = () =>
    (getActivePlayer = getActivePlayer === player[0] ? player[1] : player[0]);

  let choiceRow = prompt(
    `${getActivePlayer().name} Please input your row choice :`,
    "(between 1 and 3)"
  );

  let choiceColumn = prompt(
    `${getActivePlayer().name} Please input your column choice :`,
    "(between 1 and 3)"
  );

  myGameBoard.updateBoard(choiceRow, choiceColumn, getActivePlayer().token);

  switchPlayerTurn();
}

// let choiceRow = prompt("Please input your row choice :", "(between 1 and 3)");

// let choiceColumn = prompt(
//   "Please input your column choice :",
//   "(between 1 and 3)"
// );

// board[choiceRow - 1].splice(choiceColumn - 1, 1, "X");

const myGameBoard = GameBoard();
const board = myGameBoard.getBoard();
playersControl();

playersControl();

playersControl();

playersControl();
console.log(board);
