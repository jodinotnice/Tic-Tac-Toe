"use strict";

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

  console.log(getBoard());

  function isGamingBoardFull() {
    return board.every((element) => !element.includes(0));
  }

  console.log(isGamingBoardFull());

  function winningCondition(token, name, status) {
    if (!status) {
      for (let i = 0; i < rows; i++) {
        const row = [board[i][0], board[i][1], board[i][2]];
        if (row.every((cell) => cell === token)) {
          return "win";
        }
      }

      for (let j = 0; j < columns; j++) {
        const column = [board[0][j], board[1][j], board[2][j]];
        if (column.every((cell) => cell === token)) {
          return "win";
        }
      }

      if (
        [board[0][0], board[1][1], board[2][2]].every(
          (cell) => cell === token
        ) ||
        [board[2][0], board[1][1], board[0][2]].every((cell) => cell === token)
      ) {
        return "win";
      } else {
        return "continue";
      }
    } else if (status) {
      return "tie";
    }
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
  return { getBoard, updateBoard, winningCondition, isGamingBoardFull };
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

  let gameStatus = true;

  while (gameStatus) {
    let choiceRow = prompt(
      `${getActivePlayer().name} Please input your row choice :`,
      "(between 1 and 3)"
    );

    let choiceColumn = prompt(
      `${getActivePlayer().name} Please input your column choice :`,
      "(between 1 and 3)"
    );

    myGameBoard.updateBoard(choiceRow, choiceColumn, getActivePlayer().token);

    const winningStatus = () =>
      myGameBoard.winningCondition(
        getActivePlayer().token,
        getActivePlayer().name,
        myGameBoard.isGamingBoardFull()
      );
    console.log(winningStatus());

    switch (winningStatus()) {
      case "continue":
        console.log("winningStatus");
        switchPlayerTurn();
        break;
      case "win":
        gameStatus = false;
        console.log(`${getActivePlayer().name} has won`);
        console.log(winningStatus());
        break;
      case "tie":
        gameStatus = false;
        console.log("It's a tie");
        console.log(winningStatus());
        break;
    }
  }

  console.log(getActivePlayer());
  return { getActivePlayer };
}

const myGameBoard = GameBoard();
const board = myGameBoard.getBoard();
playersControl();
console.log(board);
