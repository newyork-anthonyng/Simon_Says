var Board = (function() {
  var boardPattern = [];
  var playerPattern = [];

  return {
    createPattern: function() {
      for(var i = 0; i < 10; i++) {
        var randomNumber = Math.floor(Math.random() * 4);
        boardPattern.push(randomNumber);
      }
    },

    getCurrentPattern: function(level) {
      return boardPattern.slice(0, level);
    },

    resetBoard: function() {
      this.resetPlayerPattern();
      boardPattern = [];
    },

    resetPlayerPattern: function() {
      playerPattern = [];
    },

    addPlayerInput: function(buttonNumber) {
      playerPattern.push(buttonNumber);
    },

    playerFinished: function(level) {
      if(playerPattern.length >= level) {
        console.log('Player pattern length: ' + playerPattern.length);
        console.log('Current level: ' + level);
        return true;
      } else {
        return false;
      }
    },

    checkPlayerMoves: function() {
      for(var i = 0; i < playerPattern.length; i++) {
        if(playerPattern[i] != boardPattern[i]) {
          return false;
        }
      }
      return true;
    },

    testBoardPattern: function() {
      console.log('Board pattern: ' + boardPattern);
      console.log('Player pattern: ' + playerPattern);
      return boardPattern;
    }
  }
})();

//// Board tests
// Board.createPattern();
// Board.testBoardPattern();
// Board.addPlayerInput(Board.testBoardPattern()[0]);
// Board.addPlayerInput(Board.testBoardPattern()[1]);
// Board.addPlayerInput(Board.testBoardPattern()[2]);
// Board.testBoardPattern();
// console.log('Checking player moves: ' + Board.checkPlayerMoves(3));
// Board.addPlayerInput(4);
// console.log('Checking player moves: ' + Board.checkPlayerMoves(4));
// Board.resetPlayerPattern();
// Board.testBoardPattern();
// Board.resetBoard();
// Board.testBoardPattern();
