var GameController = (function() {
  var level = 0;
  var gameOver = false;
  // interval represents the pause between when the player finishes
  // inputting their full pattern, and when the ButtonPlayer plays the next
  // pattern
  var interval = 900;

  return {
    createGame: function() {
      // console.log("Creating game...");
      Board.resetBoard();
      Board.createPattern();

      level = 0;
      gameOver = false;

      GameController.increaseLevel();
    },

    increaseLevel: function() {
      level++;

      GameController.playPattern();
      Board.resetPlayerPattern();

      GameController.updateScoreDisplay();
    },

    // get the player move and do game logic
    getPlayerInput: function(button) {

      // playButton returns a method reference
      ButtonPlayerController.playButton(button)();
      Board.addPlayerInput(button.id);
    },


    playMove: function(button) {

      if(!GameController.getGameOver()) {

        // check if player is finished inputting their moves
        if(!GameController.playerFinishedInputting()) {
          // get player input
          GameController.getPlayerInput(button);

          // check to see if it matches. If it doesn't, game over. If it does, next level.
          if(!GameController.checkPlayerMoves()) {
            // console.log("Game is over...");
            GameController.setGameOver();
          }
        }

        // If player is finished inputting, then increase level
        if(GameController.playerFinishedInputting() && !GameController.getGameOver()) {
          window.setTimeout(function() {
            GameController.increaseLevel();
          }, interval);
        }
      }
    },

    playPattern: function() {
      // console.log('Playing pattern...');
      // console.log('Level: ' + level);
      // console.log('Current pattern: ' + Board.getCurrentPattern(level));
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

      GameController.updateScoreDisplay();
    },

    getGameOver: function() {
      return gameOver;
    },

    updateScoreDisplay: function() {
      var scoreDisplay = document.getElementById("scoreDisplay");

      if(GameController.getGameOver()) {
        scoreDisplay.innerText = "Game Over";
      } else {
        scoreDisplay.innerText = "Score: " + (level - 1);
      }
    },

    // testGameController: function() {
    //   Board.testBoardPattern();
    //   console.log('level: ' + level);
    //   console.log('gameOver: ' + gameOver);
    //   console.log('player matches?: ' + this.checkPlayerMoves());
    // }
  }

})();
