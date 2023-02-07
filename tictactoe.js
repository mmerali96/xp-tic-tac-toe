function playerMove(gameboard, player, opponent) {
  console.log(`Player ${player}'s move`);
  if (lookForTwoInARow(gameboard, opponent, player)) {
    return;
  } else if (lookForTwoInARow(gameboard, player, player)) {
    return;
  } else if (lookForEmptyCorner(gameboard, player)) {
    return;
  } else if (lookForCenter(gameboard, player)) {
    return;
  } else if (lookForEmptySide(gameboard, player)) {
    return;
  }
}

function lookForCenter(gameboard, player) {
  if (gameboard[1][1] === "") {
    gameboard[1][1] = player;
    return true;
  }
  return false;
}

/**
 * Fill up every empty slot
 * @param {*} gameboard
 * @param {*} player
 * @returns
 */
function lookForEmptySide(gameboard, player) {
  let { i, j } = findEmptySlot(gameboard);
  if (i !== -1 && j !== -1) {
    gameboard[i][j] = player;
  }
}

function isGameboardFull(gameboard) {
  let { i, j } = findEmptySlot(gameboard);
  console.log("Gameboard is full... its a draw");
  return i === -1 && j === -1;
}

function findEmptySlot(gameboard) {
  for (let i = 0; i < gameboard.length; i++) {
    for (let j = 0; j < gameboard.length; j++) {
      if (gameboard[i][j] === "") {
        return { i, j };
      }
    }
  }
  return { i: -1, j: -1 };
}

function lookForEmptyCorner(gameboard, player) {
  if (gameboard[0][0] === "") {
    gameboard[0][0] = player;
    return true;
  } else if (gameboard[0][2] === "") {
    gameboard[0][2] = player;
    return true;
  } else if (gameboard[2][0] === "") {
    gameboard[2][0] = player;
    return true;
  } else if (gameboard[2][2] === "") {
    gameboard[2][2] = player;
    return true;
  } else {
    return false;
  }
}

function lookForTwoInARow(gameboard, playerToLookFor, playerToInsert) {
  // look for 2 in a row horizontally
  for (let i in gameboard) {
    let row = gameboard[i];
    if (row.join("") === `${playerToLookFor}${playerToLookFor}`) {
      let emptySlotIndex = row.indexOf("");
      row[emptySlotIndex] = playerToInsert;
      return true;
    }
  }

  for (let i in gameboard) {
    let col = gameboard.map((v, _) => v[i]);
    if (col.join("") === `${playerToLookFor}${playerToLookFor}`) {
      let emptySlotIndex = col.indexOf("");
      gameboard[emptySlotIndex][i] = playerToInsert;
      return true;
    }
  }
  return false;
}

function checkIfWinner(board, player) {
  if (
    (board[0][0] === player &&
      board[0][1] === player &&
      board[0][2] === player) ||
    (board[1][0] === player &&
      board[1][1] === player &&
      board[1][2] === player) ||
    (board[2][0] === player &&
      board[2][1] === player &&
      board[2][2] === player) ||
    (board[0][0] === player &&
      board[1][0] === player &&
      board[2][0] === player) ||
    (board[0][1] === player &&
      board[1][1] === player &&
      board[2][1] === player) ||
    (board[0][2] === player &&
      board[1][2] === player &&
      board[2][2] === player) ||
    (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) ||
    (board[0][2] === player && board[1][1] === player && board[2][0] === player)
  ) {
    console.log(`Player ${player} has won.`);
    return true;
  } else {
    return false;
  }
}

function main() {
  console.log("welcome to tic tac toe");

  // initialize 2d array gameboard
  var gameboard = new Array(3).fill("").map(() => new Array(3).fill(""));
  var continueGame = true;
  while (continueGame) {
    playerMove(gameboard, "X", "O");
    playerMove(gameboard, "O", "X");
    console.table(gameboard);
    if (
      checkIfWinner(gameboard, "X") ||
      checkIfWinner(gameboard, "O") ||
      isGameboardFull(gameboard)
    ) {
      break;
    }
  }
}

main();
