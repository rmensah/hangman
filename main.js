
//Making the Game
var prompt = require('prompt');

prompt.start();

var Word = require('./word.js');

var game = {
	wordBank : {" "}; 
	guessesRemaining : "10";
	currentWrd :"null";

	function startGame(wrd) {

		var new Word = (wordBank)
		new Word = currentWrd

	}
	// called .getLets() method on the currentWrd object (will get back to code here later)

	keepPromptingUser();

	function keepPromptingUser() {
		var self = this;
		prompt.get(guessLetter, function(err, result) {
			console.log("The Letter or space you guessed is" + result.guessLetter);
			var findHowManyOfUserGuess = currentWrd.checkIfLetterFound(result.guessLetter);
				if(findHowManyOfUserGuess === 0) {
					console.log("You gussed wrong~!")
					guessesRemaining --;
				}
				else {
					console.log("You guessed right!")

					//check if user has won the game

					if (currentWrd.didWeFindTheWord() = true) {
						console.log("You Won!!!")
						return 1
					}
				}

		})
	}
	console.log (Guesses remaining: '+ value of guessesRemaining');
	console.log( wordRender(this.currentWrd));
	if(guessesRemaining > 0 && currentWrd.found == false) {
		keepPromptingUser()
	} else {
		if( guessesRemaining === 0) {
			console.log("Gave over bro")
		} else {
			console.log(this.wordRender(currentWrd))
		}
	}
	game.startGame()
}
