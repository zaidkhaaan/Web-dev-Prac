'use strict';

// Selecting elements
const player0E = document.querySelector('.player--0');
const player1E = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
// score0El.textContent = 0;
// score1El.textContent = 0;
diceEl.classList.add('hidden');

// const score = [0, 0];
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

let score, currentScore, activePlayer, playing;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0E.classList.remove('player--winner');
  player1E.classList.remove('player--winner');
  player0E.classList.add('player--active');
  player1E.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // samjha nnhi
  player0E.classList.toggle('player--active');
  player1E.classList.toggle('player--active');
};

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6 + 1);
    console.log(dice);
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1 : if true , switch to new player

    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // current0El.textContent = currentScore; // change later
    } else {
      // switch to next player

      // document.getElementById(`current--${activePlayer}`).textContent = 0;
      // currentScore = 0;
      // activePlayer = activePlayer === 0 ? 1 : 0; // samjha nnhi
      // player0E.classList.toggle('player--active');
      // player1E.classList.toggle('player--active');
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.add the current score to the active player
    score[activePlayer] += currentScore;
    // score[1] = score[1] + currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // 2.Check if player's score is >= 100
    // finish the game

    if (score[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      documents
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // Switch to the next player
    // switchPlayer();
  }
});

// btnNew.addEventListener('click', function () {
//   score0El.textContent = 0;
//   score1El.textContent = 0;
//   current0El.textContent = 0;
//   current1El.textContent = 0;
//   player0E.classList.remove('player--winner');
//   player1E.classList.remove('player--winner');
//   player0E.classList.add('player--active');
//   player1E.classList.remove('player--active');

// })

btnNew.addEventListener('click', init);
