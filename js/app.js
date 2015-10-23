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
