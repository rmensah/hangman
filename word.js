// Word Constructor

var Letter = require("Letter.js");

function Word(wrd){
	 word = wrd;
	 lets = { };
	 found = false;

	 function gitLets(){

	 	for(var i = 0; i < word.length; i++)
	 		lets = [i];
	 }
	 function checkIfLetterFound(guessLetter) {
	 	var whatToReturn = 0;
	 	for(var i = 0; i < lets.length; i++)
	 		if(this.charac === guessLetter){
	 			this.appear = true;
	 			checkIfLetterFound ++;
	 			return checkIfLetterFound;
	 		}
	 }

	 function didWeFindTheWord() {

	 	lets.every(function (curLet){
	 		if(this.appear = true)
	 			return true;
	 	}
	 };

	 function wordRender() {
	 	var str = {" "};
	 	if(var i = 0; i < lets.length; i++)
	 	letterRender() + "str"; // check later, code contruction probably not right
	 	return str;
	 }
} 
module.export = Word;