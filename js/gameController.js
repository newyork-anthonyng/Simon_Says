var GameController = (function() {
  var gameOver = false;
  var level = 1;

  return {
    // create new board game
    createGame: function() {
      GameController.restartGame();
      Board.createPattern();
    },

    // restart game
    restartGame: function() {
      Board.resetBoardPattern();
    },

    // player enters move
    playerMoves: function(playerInput) {
      // add player input
      Board.addPlayerInput(playerInput);

      // check their moves
      GameController.checkForGameOver();

      // advance to next level otherwise
      if(!gameOver && Board.playerLevel() === level) {
        GameController.nextLevel();
      }
    },

    // advance to the next level of the game
    nextLevel: function() {
      level++;
      Board.test();
      console.log("Next level: " + level)
      Board.resetPlayerPattern();
    },

    // check for game over
    checkForGameOver: function() {
      if(!Board.checkForMatch()) {
        gameOver = true;
        console.log("Game is over");
      }
    },

    // return current board pattern
    getBoardPattern: function() {
      var myBoard = Board.getBoardPattern();
      return myBoard.splice(0, level);
    }

  }
})();
