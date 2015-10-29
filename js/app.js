(function() {
  GameController.createGame();

  var button0 = document.getElementById("0");
  var button1 = document.getElementById("1");
  var button2 = document.getElementById("2");
  var button3 = document.getElementById("3");
  var playButton = document.getElementById("PlayGame");

  playButton.addEventListener("click", function() {
    console.log("Board pattern: " + Board.getBoardPattern());
    PatternPlayerController.play(GameController.getBoardPattern());
  });

  button0.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
    Board.test();
  });

  button1.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
    Board.test();
  });

  button2.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
    Board.test();
  });

  button3.addEventListener("click", function() {
    GameController.playerMoves(Number(this.id));
    ViewController.highlightButton(this);
    Board.test();
  });

})();
