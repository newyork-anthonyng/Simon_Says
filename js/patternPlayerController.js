var PatternPlayerController = (function() {

  // interval is how long the button will be lit up
  var interval = 1000;

  return {
    // play the patterns that are passed into it
    play: function(patternArray) {
      // light up the first button, add a timeout interval that increases
      console.log(patternArray);

      for(var i = 0; i < patternArray.length; i++) {
        console.log("Playing pattern: " + i);
        window.setTimeout(function() {
          var highlighted = document.getElementsByClassName("highlighted");
          if(!highlighted) {
            // remove any previous "highlighted" classes
            highlighted.classList.remove("highlighted");
          }
            // find the button that we have to light up
            var currentButton = document.getElementById(patternArray[i].toString());

            // add a "highlighted" class to it
            currentButton.classList.add("highlighted");

        }, 1000 * i);
      }
    },
  }

})();
