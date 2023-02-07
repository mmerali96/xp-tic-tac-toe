# Notes

## Creating the gameboard

A 2D matrix would be a good option here to represent the gameboard. It will be initialized with '' as empty and players will insert there moves as either 'X' or 'O'.

## Game Logic

The game will run in a while loop until a winner is found or the entire board has no more empty slots left. Players will make call the `playerMove` function which will find the best move for them and mark their symbol on the gameboard, player X starts and player O goes second. After each player makes a move, the game will call `checkIfWinner` to see if anyone has 3 in a row.

### playerMove function

### checkIfWinner function

If there is a winner, it will print a message and then end the loop. If there are no winners, it will continue. This function will check all the possible combinations and return true if it finds 3 in a row.
