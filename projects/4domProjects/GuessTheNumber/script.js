const num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#submit');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remaining-attempt');
const lowOrHigh = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultP')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter valid number");
    }else if(guess < 1){
        alert("please enter number greater or equal to 1");
    }else if(guess >100){
        alert('please enter number smaller or equal to 100');
    }else{
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage('You guessed it right');
        endGame();
    }else if(guess < randomNumber){
        displayMessage('Required Number is higher');
    }else if (guess > randomNumber){
        displayMessage('Required Number is lower');
    }
}
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += guess;
    numGuess++;
    remaining.innerHTML = 11 - numGuess;
}
function displayMessage(message){
    lowOrHigh.innerHTML
}
function newGame(){

}
function endGame(){

}

if(playGame){
    submit.addEventListener('click',(e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}