var GameController = (function() {
  var level = 1;
  var gameOver = false;

  return {
    createGame: function() {
      Board.resetBoard();
      Board.createPattern();

      level = 1;
      gameOver = false;
    },

    increaseLevel: function() {
      level++;

      GameController.playPattern();
    },

    // get the player move and do game logic
    getPlayerInput: function(button) {
      // playButton returns a method reference
      ButtonPlayerController.playButton(button)();
      Board.addPlayerInput(button.id);
    },


    playMove: function(button) {
      // light up the button
      ButtonPlayerController.playButton(button)();

      // check if game is over
      if(!gameOver) {
        // check if player is finished inputting pattern
        GameController.getPlayerInput(button);

      }


      // get player move

      // check to see if it matches. If it doesn't, game over. If it does, next level.

      // If next level, then play the new pattern.

    },

    playPattern: function() {
      console.log('Playing pattern...');
      console.log('Level: ' + level);
      console.log('Current pattern: ' + Board.getCurrentPattern(level));
      ButtonPlayerController.playPattern(Board.getCurrentPattern(level));
    },

    playerFinishedInputting: function() {
      return Board.playerFinished(level);
    },

    checkPlayerMoves: function() {
      return Board.checkPlayerMoves();
    },

    setGameOver: function() {
      gameOver = true;
    },

    getGameOver: function() {
      return gameOver;
    },

    testGameController: function() {
      Board.testBoardPattern();
      console.log('level: ' + level);
      console.log('gameOver: ' + gameOver);
      console.log('player matches?: ' + this.checkPlayerMoves());
    }
  }

})();

// GameController.createGame();
// GameController.testGameController();
// GameController.increaseLevel();
// GameController.testGameController();

// var GameController = (function() {
//   var gameOver = false;
//   var level = 1;
//
//   return {
//     // create new board game
//     createGame: function() {
//       GameController.restartGame();
//       Board.createPattern();
//     },
//
//     // restart game
//     restartGame: function() {
//       Board.resetBoardPattern();
//     },
//
//     // player enters move
//     playerMoves: function(playerInput) {
//       // add player input
//       Board.addPlayerInput(playerInput);
//
//       // check their moves
//       GameController.checkForGameOver();
//
//       // advance to next level otherwise
//       if(!gameOver && Board.playerLevel() === level) {
//         GameController.nextLevel();
//       }
//     },
//
//     // advance to the next level of the game
//     nextLevel: function() {
//       level++;
//       Board.test();
//       console.log("Next level: " + level)
//       Board.resetPlayerPattern();
//     },
//
//     // check for game over
//     checkForGameOver: function() {
//       if(!Board.checkForMatch()) {
//         gameOver = true;
//         console.log("Game is over");
//       }
//     },
//
//     // return current board pattern
//     getBoardPattern: function() {
//       var myBoard = Board.getBoardPattern();
//       return myBoard.splice(0, level);
//     }
//
//   }
// })();
