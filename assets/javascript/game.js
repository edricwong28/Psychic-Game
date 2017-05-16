

      // Our array of possible computer choices.
      var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

      //  GLOBAL variables for tracking our wins, losses and ties. They begin at 0.
      var wins = 0;
      var losses = 0;
      var guessesLeft = 10;
      var guessed = [];
      var letterToGuess = null;


              var reset = function(){
 
               guessesLeft = 10;
               guessed = [];
               letterToGuess = null;
                       };

      // When the user presses a key, it will run the following function...
      document.onkeyup = function(event) {


        var userGuess = event.key;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guessesLeft--;
        guessed.push(userGuess);  
        document.querySelector("#guessed-letters").innerHTML = guessed.join(" ");
        document.querySelector("#guesses-left").innerHTML = guessesLeft;


        // If the user presses a key, run the game logic.
        if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || (userGuess === "d") || (userGuess === "e") || (userGuess === "f") || (userGuess === "g") || (userGuess === "h") || (userGuess === "i") || (userGuess === "j") || (userGuess === "k") || (userGuess === "l") || (userGuess === "m") || (userGuess === "n") || (userGuess === "o") || (userGuess === "p") || (userGuess === "q") || (userGuess === "r") || (userGuess === "s") || (userGuess === "t") || (userGuess === "u") || (userGuess === "v") || (userGuess === "w") || (userGuess === "x") || (userGuess === "y") || (userGuess === "z")) {
              
                      if(guessesLeft === 0){
                      losses++;
                      document.querySelector("#losses").innerHTML = losses;
                      alert("You are not a Psychic...");
                      reset();
                      }
                      if(userGuess === computerGuess){
                      wins++;
                      document.querySelector("#wins").innerHTML = wins;
                      alert("You read my mind!");
                      reset();
                      }
     
              } 
               document.querySelector("#guessed-letters").innerHTML = guessed.join(" ");
               document.querySelector("#guesses-left").innerHTML = guessesLeft;


          };
              
