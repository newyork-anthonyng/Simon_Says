var Board = (function() {
  var boardPattern = [];
  var playerPattern = [];

  return {
    // create random pattern of 100 colors
    createPattern: function() {
      for(var i = 0; i < 50; i++) {
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
      console.log(boardPattern);
      console.log(playerPattern);
    }
  }
})();

var GameController = (function() {

})();

(function() {
})();
