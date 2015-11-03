var ButtonPlayerController = (function() {

  var interval = 800;
  var intervalDelay = 500;

  return {

    playButton: function(button) {
      return function() {
        console.log(button.id + ' was pressed.');

        // remove all highlights from buttons
        var allButtons = document.getElementsByClassName('highlighted');

        for(var i = 0; i < allButtons.length; i++) {
          allButtons[i].classList.remove('highlighted');
        }

        button.classList.add('highlighted');

        // add timeout
        window.setTimeout(function() {
          button.classList.remove('highlighted');
        }, interval);
      }
    },

    // play the patterns that are passed into it
    playPattern: function(patternArray) {

      // because of closure issues, make an array of functions
      var functionArray = [];
      for(var i = 0; i < patternArray.length; i++) {
        // get current button
        var currentButton = document.getElementById(patternArray[i]);
        functionArray.push(ButtonPlayerController.playButton(currentButton));
      }

      for(var i = 0; i < patternArray.length; i++) {
        window.setTimeout(functionArray[i],(i * interval) + (i * intervalDelay));
      }
    },
  }

})();
