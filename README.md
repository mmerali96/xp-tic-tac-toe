# Notes

## Creating the gameboard

A 2D matrix would be a good option here to represent the gameboard. It will be initialized with '' as empty and players will insert there moves as either 'X' or 'O'.

## Game Logic

The game will run in a while loop until a winner is found or the entire board has no more empty slots left. Players will make call the `playerMove` function which will find the best move for them and mark their symbol on the gameboard, player X starts and player O goes second. After each player makes a move, the game will call `checkIfWinner` to see if anyone has 3 in a row.

### playerMove function

- This is where the core logic is in this if/else block.

1. First the player is going to look to see if it can win by looking for 2 of its own characters in a row. If found, it will insert into the proper slot to win.
2. If the player cannot make a winning move, it will look to see if it can block its opponent. It checks if the opponent has 2 in a row, and inserts into the slot which will block their win.
3. If the player determines that neither player can win, it looks for an empty corner, and inserts into the first one it finds.
4. If all corners are filled, the player inserts into the center slot.
5. If corners and the center is filled, the player will look for the nearest empty side slot and insert there.

I realize this is not the perfect algorithm for this, but this is what I came up with off the top of my head with a 2 hour timer.

All the helper functions that playerMove calls are structured to return true if it inserts into the gameboard so the player does not make multiple moves within one turn. If these helper functions return false, it means the player could not make that move so it will try to make another move.

### checkIfWinner function

If there is a winner, it will print a message and then end the loop. If there are no winners, it will continue. This function will check all the possible combinations and return true if it finds 3 in a row.

### isGameboardFull function

This will loop through the gameboard, and return true there are no empty slots. This will cause the game to end as a draw.
