'use strict';

let randomNumber = parseInt(Math.random() * 20 + 1);
console.log(randomNumber);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const guessSlot = document.querySelector('.slot');
const remainingGuess = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const restartGame = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousGuess = [];
let count = 1;
let playState = true;

if (playState) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const picked = parseInt(userInput.value);
    validate(picked);
  });
}

// ------- validate the input -------
function validate(picked) {
  if (isNaN(picked)) {
    alert('PLease enter a valid number');
  } else if (picked > 20 || picked < 1) {
    alert('PLease enter a number between 1 and 20');
  } else {
    previousGuess.push(picked);
    if (count === 5) {
      updateValue(picked);
      displayMessage(`Game over, the number was ${randomNumber}`);
      endGame();
    } else {
      updateValue(picked);
      checkGuess(picked);
    }
  }
}

// ------- check for guessed number status -------
function checkGuess(picked) {
  if (picked === randomNumber) {
    displayMessage(`you won! ${picked} is the number`);
    endGame();
  } else if (picked < randomNumber) {
    displayMessage(`${picked} is too low!`);
  } else if (picked > randomNumber) {
    displayMessage(`${picked} is too high!`);
  }
}

// ------- update the values -------
function updateValue(picked) {
  userInput.value = '';
  guessSlot.innerHTML += `${picked} | `;
  count++;
  remainingGuess.innerHTML = `${6 - count}`;
}

// ------- display messages -------
function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

// ------- end the current game -------
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('reset-game');
  p.innerHTML = '<button id="reset-btn">Start new game</button>';
  restartGame.appendChild(p);
  playState = false;
  newGame();
}
// ------- start new game -------

function newGame() {
  const newGameBtn = document.querySelector('#reset-btn');
  newGameBtn.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 20 + 1);
    previousGuess = [];
    count = 1;
    guessSlot.innerHTML = '';
    remainingGuess.innerHTML = '';
    lowOrHigh.innerHTML = ''
    userInput.removeAttribute('disabled');
    restartGame.removeChild(p);
    playState = true;
  });
}
