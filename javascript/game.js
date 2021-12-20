var lettersGuessed = [];
var guessesLeft = 12;
var wins = 0;
var losses = 0;
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);

document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    
    addLetter(keyPress);

}

function addLetter (usersKeypress) {


    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

  
    if (repeatGuess) {
        alert(usersKeypress + " Yenidən cəhd elə!!");

      
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);

     
        showLettersGuessed();
        
        guessMatch(usersKeypress);
    }

}

function showLettersGuessed() {
    var tempStr = lettersGuessed.join(" ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("Sən qalib oldun!! ");
        wins = wins + 1;
        showWins();
        

    } else if (guessesLeft === 0) {
        alert("Yenidən başlayin!! ");
        losses = losses + 1;

        showlosses()

    } else {
        guessesLeft = guessesLeft - 1;
        showGuessesRemaining();
    }
}


function showWins() {
    document.getElementById("Wins").innerHTML = wins;
}
function showlosses() {
    document.getElementById("losses").innerHTML = losses;
}


function showGuessesRemaining() {
    document.getElementById("Guesses").innerHTML = guessesLeft;
}


function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();

