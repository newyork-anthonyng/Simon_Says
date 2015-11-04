(function() {

  var button0 = document.getElementById('0');
  var button1 = document.getElementById('1');
  var button2 = document.getElementById('2');
  var button3 = document.getElementById('3');
  var playGameButton = document.getElementById('PlayGame');

  GameController.createGame();

  playGameButton.addEventListener('click', function() {
    GameController.createGame();
  });

  button0.addEventListener('click', function() {
    GameController.playMove(this);
  });

  button1.addEventListener('click', function() {
    GameController.playMove(this);
  });

  button2.addEventListener('click', function() {
    GameController.playMove(this);
  });

  button3.addEventListener('click', function() {
    GameController.playMove(this);
  });

})();
