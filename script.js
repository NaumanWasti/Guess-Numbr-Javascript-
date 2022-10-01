'use strict';
const randNumGenerator = function (arg) {
  return Math.trunc(Math.random() * arg) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (sc) {
  document.querySelector('.score').textContent = sc;
};
const ChangeBg = function (col) {
  document.querySelector('body').style.backgroundColor = col;
};
const displayImage = function (img) {
  document.body.style.backgroundImage = img;
};
const Guess = function (sc) {
  if (sc == 0) {
    return (document.querySelector('.guess').value = '');
  }
  return Number(document.querySelector('.guess').value);
};

let number = randNumGenerator(20);
let score = 20;
let highscore = 0;

//click on check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Guess();
  //if no value input
  if (!guess) {
    displayMessage('NO number');
    //if value=secretnumber
  } else if (guess == number) {
    displayMessage('correct Number');
    document.querySelector('.number').textContent = number;
    // ChangeBg('#60b347');
    displayImage(
      "url('https://media.istockphoto.com/vectors/pixel-art-gui-sign-with-red-ribbon-and-gold-cup-vector-id1289940450?k=20&m=1289940450&s=612x612&w=0&h=FjqPQ61e3nq-xQwwGBPxD_aVrxc4_ygkWkGob6yzXW4=')"
    );
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //if value!=secretnumber
  } else if (number != guess) {
    displayMessage(number < guess ? 'too high' : 'too low');
    score--;
    displayScore(score);
  }
  //when we lose
  if (score < 1) {
    displayMessage('You lost the game');
    displayImage(
      "url('https://www.freesoundslibrary.com/wp-content/uploads/2020/06/game-lose.jpg')"
    );
    //  ChangeBg('#333');
  }
});

//click on again
document.querySelector('.again').addEventListener('click', function () {
  displayImage('');
  number = randNumGenerator(20);
  score = 20;
  document.querySelector('.number').textContent = '?';
  displayMessage('start guessing...');
  Guess(0);
  ChangeBg('#222');
  displayScore(score);
});
