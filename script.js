'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);


	// When no input
	if ( !guess ) {
		// document.querySelector('.message').textContent = 'No Number';
		displayMessage('No Number');
	// When player win the game
	} else if (guess === secretNumber) {
		// document.querySelector('.message').textContent = 'Correct Number';
		displayMessage('Correct Number');
		document.querySelector('body').style.backgroundColor = '#09E41C';
		document.querySelector('.number').style.width = '30rem';

		document.querySelector('.number').textContent = secretNumber;

		if (score > highScore) {
			highScore = score
			document.querySelector('.highscore').textContent = highScore;
		}

	// When guess is wrong 

	} else if (guess !== score) {
		if (score > 1) {
			// document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';
			displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			// document.querySelector('.message').textContent = 'You Loose the game';
			displayMessage('You loose the game');
		}
	}


	// // Whe guess greater than number
	// } else if (guess > secretNumber) {
	// 	if (score > 0 ) {
	// 	document.querySelector('.message').textContent = 'Too High';
	// 	score--;
	// 	document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = 'You Loose the game';
	// 	}

	// // // When guess lower than number
	// } else if (guess < secretNumber) {
	// 	if (score > 0) {
	// 	document.querySelector('.message').textContent = 'Too Low';
	// 	score--;
	// 	document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = 'You Loose the game';
	// 	} 
	// }

})
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	// document.querySelector('.message').textContent = 'Start Guessing....';
	displayMessage('Start Guessing....');
	document.querySelector('.score').textContent = score;
	document.querySelector('.number').textContent = '?';
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.guess').value = '';

})