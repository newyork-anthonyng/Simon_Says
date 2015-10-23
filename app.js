var Board = (function() {
  var boardPattern = [];
  var playerPattern = [];

  return {
    // create random pattern of 100 colors
    createPattern: function() {
      for(var i = 0; i < 10; i++) {
        // create a random number between 0 and 3, inclusive
        var randomNumber = Math.floor(Math.random() * 4);
        boardPattern.push(randomNumber);
      }

    },

    // reset pattern
    resetBoardPattern: function() {
      boardPattern = [];
    },

    // add player inputs
    addPlayerInput: function(playerInput) {
      playerPattern.push(playerInput)
    },

    // player inputs
    playerLevel: function() {
      return playerPattern.length;
    },

    // reset player pattern
    resetPlayerPattern: function() {
      playerPattern = [];
    },

    // check player inputs against board pattern
    checkForMatch: function() {
      // check all of the player patterns up to "i" against the board patterns
      // where "i" is equal to the length of player patterns
      for(var i = 0; i < playerPattern.length; i++) {
        if(playerPattern[i] !== boardPattern[i]) {
          return false;
        }
      }
      return true
    },

    // TO-DO DELETE DEBUG
    test: function() {
      console.log("Board: " + boardPattern);
      console.log("Player: " + playerPattern);
    }
  }
})();

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
    }

  }
})();

(function() {
  GameController.createGame();
  Board.test();

  var button0 = document.getElementById("0");
  var button1 = document.getElementById("1");
  var button2 = document.getElementById("2");
  var button3 = document.getElementById("3");

  button0.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
  });

  button1.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
  });

  button2.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
  });

  button3.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
  });

})();
