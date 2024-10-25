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
  };

  function isCellNotAvailable() {}

  function winningCondition(token, name) {
    for (let i = 0; i < rows; i++) {
      if (board[i].every((cell) => cell === token)) {
        return console.log(`${name} has won`);
      }
    }

    for (let j = 0; j < columns; j++) {
      const column = [board[0][j], board[1][j], board[2][j]];
      if (column.every((cell) => cell === token)) {
        return console.log(`${name} has won`);
      }
    }

    if (
      ([board[0][0], board[1][1], board[2][2]].every(
        (cell) => cell === token
      ) || board[2][0],
      [board[1][1], board[0][2]].every((cell) => cell === token))
    ) {
      return console.log(`${name} has won`);
    }
    return console.log("It's a tie !");
  }

  function updateBoard(row, col, value) {
    const emptyCell = board[row - 1][col - 1]; // Accès direct à la cellule
    if (emptyCell === 0 && row <= rows && col <= columns) {
      // Cell is empty
      board[row - 1][col - 1] = value;
    } else {
      return;
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
  console.log(getActivePlayer());

  let numberTurnTest = 10;

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

      myGameBoard.winningCondition(
        getActivePlayer().token,
        getActivePlayer().name
      );
      switchPlayerTurn();
    }
  }

  console.log(getActivePlayer());
  return { getActivePlayer };
}

const myGameBoard = GameBoard();
const board = myGameBoard.getBoard();
playersControl();
console.log(board);
