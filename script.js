function GameBoard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell().getValue());
    }
  }

  const getBoard = () => {
    return board;
    1;
  };

  function isCellNotAvailable() {
    for (let i = 0; i < rows; i++) {
      board[i];
      for (let j = 0; j < columns; j++) {
        if (board[j] !== 0) {
          console.log("Announce winner");
        }
      }
    }
  }

  function winningCondition() {}

  function updateBoard(row, col, value) {
    const emptyCell = board[row - 1][col - 1]; // Accès direct à la cellule
    if (emptyCell === 0 && row <= rows && col <= columns) {
      // Cell is empty
      board[row - 1][col - 1] = value;
    } else {
      console.log("Not available");
    }
  }
  return { getBoard, updateBoard, isCellNotAvailable, winningCondition };
}

function Cell() {
  let value = 0;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return { addToken, getValue };
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

  let activePlayer = player[0];

  const switchPlayerTurn = () =>
    (activePlayer = activePlayer === player[0] ? player[1] : player[0]);

  const getActivePlayer = () => activePlayer;

  console.log(activePlayer);

  let numberTurnTest = 5;

  if (myGameBoard.isCellNotAvailable) {
    for (let i = 0; i < numberTurnTest; i++) {
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
  }

  console.log(getActivePlayer());
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
console.log(board);
