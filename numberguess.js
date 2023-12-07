function generateRandomNumber () {
    return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = generateRandomNumber ();
let trials =0

function checkGuess() {
  const userGuessElement = document.getElementById('userGuess');
  const outcomeElement = document.getElementById('outcome');

  const userGuess = Number(userGuessElement.value);
  trials++;

  if (userGuess < randomNumber) {
    outcomeElement.textContent = 'Too low! Try again.';
  } else if (userGuess > randomNumber) {
    outcomeElement.textContent = 'Too high! Try again.';
  } else {
    outcomeElement.textContent = 'Congrats! You guessed the correct number';
    userGuessElement.disabled = true;
}
}