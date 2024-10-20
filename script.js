let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 10;
document.getElementById('submitGuess').addEventListener('click', function () {
    const userGuess = Number(document.getElementById('guessInput').value);
    const feedback = document.getElementById('feedback');
    const guessesRemaining = document.getElementById('guessesRemaining');

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        feedback.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }
    guesses--;
    if (userGuess === randomNumber) {
        feedback.textContent = 'Congratulations! You guessed the correct number!';
        feedback.style.color = 'green';
        endGame();
    } else if (guesses === 0) {
        feedback.textContent = 'Game Over! You have no guesses left. The number was ' + randomNumber + '.';
        feedback.style.color = 'red';
        endGame();
    } else {
        feedback.textContent = userGuess < randomNumber ? 'Too low! Try again.' : 'Too high! Try again.';
        feedback.style.color = 'orange';
        guessesRemaining.textContent = 'Guesses remaining: ' + guesses;
    }
});
document.getElementById('playAgain').addEventListener('click', function () {
    guesses = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('feedback').textContent = '';
    document.getElementById('guessesRemaining').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('submitGuess').style.display = 'inline-block';
    document.getElementById('playAgain').style.display = 'none';
});
function endGame() {
    document.getElementById('submitGuess').style.display = 'none';
    document.getElementById('playAgain').style.display = 'inline-block';
}
