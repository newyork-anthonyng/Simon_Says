var ButtonPlayerController = (function() {

  var interval = 1000;

  return {

    playButton: function(button) {
      console.log(button.id + ' was pressed.');

      // remove all highlights from buttons
      var allButtons = document.querySelector('button');
      
      for(var i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('highlighted');
      }

      // add highlight to selected button
      button.classList.add('highlighted');

      // add timeout

    },

    // playButton: function(button_index) {
    //   return function() {
    //     // remove prior highlights
    //     var oldButton = document.getElementsByClassName("highlighted");
    //     console.log(oldButton);
    //     for(var i = 0; i < oldButton.length; i++) {
    //       oldButton[i].classList.remove("highlighted");
    //     }
    //
    //     // add highlights to current button
    //     var currentButton = document.getElementById(button_index);
    //     currentButton.classList.add("highlighted");
    //   }
    // },

    // play the patterns that are passed into it
    play: function(patternArray) {
      var functionArray = [];

      for(var i = 0; i < patternArray.length; i++) {
        functionArray.push(PatternPlayerController.playButton(patternArray[i]));
      }

      for(var i = 0; i < patternArray.length; i++) {
        window.setTimeout(functionArray[i], i * interval);
      }
    },
  }

})();
