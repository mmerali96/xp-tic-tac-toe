function playerMove(gameboard, player) {
  console.log(`Player ${player}'s move`);
  if (gameboard[2][0] === "") {
    gameboard[2][0] = player;
  } else if (gameboard[0][2] === "") {
    gameboard[0][2] = player;
  } else if (gameboard[0][0] === "") {
    gameboard[0][0] = player;
  } else if (gameboard[2][2] === "") {
    gameboard[2][2] = player;
  } else if (gameboard[1][0] === "") {
    lookForTwoInARow(gameboard, player);
  }
}

function lookForTwoInARow(gameboard, player) {
  // look for 2 in a row horizontally
  for (let i in gameboard) {
    let row = gameboard[i];
    if (row.join("") === `${player}${player}`) {
      let emptySlotIndex = row.indexOf("");
      row[emptySlotIndex] = player;
    }
  }

  for (let i in gameboard) {
    let col = gameboard.map((v, _) => v[i]);
    if (col.join("") === `${player}${player}`) {
      let emptySlotIndex = col.indexOf("");
      console.log("look for 2 found 2", emptySlotIndex, i);
      gameboard[emptySlotIndex][i] = player;
    }
  }
}

function checkIfWinner(board, player) {
  if (
    (board[0][0] == player && board[0][1] == player && board[0][2] == player) ||
    (board[1][0] == player && board[1][1] == player && board[1][2] == player) ||
    (board[2][0] == player && board[2][1] == player && board[2][2] == player) ||
    (board[0][0] == player && board[1][0] == player && board[2][0] == player) ||
    (board[0][1] == player && board[1][1] == player && board[2][1] == player) ||
    (board[0][2] == player && board[1][2] == player && board[2][2] == player) ||
    (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
    (board[0][2] == player && board[1][1] === player && board[2][0] === player)
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
    playerMove(gameboard, "X");
    playerMove(gameboard, "O");
    console.table(gameboard);
    if (checkIfWinner(gameboard, "X") || checkIfWinner(gameboard, "O")) {
      break;
    }
  }
}

main();
