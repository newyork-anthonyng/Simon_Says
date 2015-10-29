# Simon Says
## A Simple Game Clone

* The user will be able to navigate to play a simple game of Simon Says
* The user will be able to click onto one of four game pieces to record their move
* The user will be able to see "Simon" play their moves, at a reasonable speed
* The user will be able to see their score, based on how many moves they have made
* The user will be able to game instructions

## Classes and Methods
* Board
    * attributes
      * board pattern
      * player pattern
      * current level
    * create board pattern
    * checks player input
    * player is done with their turn?
    * keeps track of current level
    * returns board pattern, up to the current level
    * restart game
* PatternPlayerController
    * plays the board pattern (up to length of current level)
* GameController
    * play game
      * loop
        * PatternPlayer plays current pattern
          * loop
            * Player enters move
            * <strong>Board</strong>: checks player input
            * <strong>Board</strong>: if player is wrong, then game is over. Break out of both loops.
            * <strong>Board</strong>: When player is done inputing all of the current pattern, repeat. (player is done with their turn?)
        * <strong>Board</strong>: Current level increases
