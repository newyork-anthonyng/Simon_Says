(function() {
  GameController.createGame();

  var button0 = document.getElementById("0");
  var button1 = document.getElementById("1");
  var button2 = document.getElementById("2");
  var button3 = document.getElementById("3");
  var playButton = document.getElementById("PlayGame");

  playButton.addEventListener("click", function() {
    console.log("Board pattern: " + Board.getBoardPattern());
    PatternPlayerController.play(Board.getBoardPattern());
  });

  button0.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    console.log("Button clicked: " + this.classList);
    ViewController.highlightButton(this);
  });

  button1.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
  });

  button2.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
  });

  button3.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
  });

})();
