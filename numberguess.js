function generateRandomNumber () {
    return Math.floor(Math.random() * 100) + 1;
}
let randomNumber = generateRandomNumber ();
let trials =5

function checkGuess() {
  const userGuessElement = document.getElementById('userGuess');
  const outcomeElement = document.getElementById('outcome');

  const userGuess = Number(userGuessElement.value);
  trials++;

  if (userGuess < randomNumber) {
    outcomeElement.textContent = 'Too low! Keep trying.';
  } else if (userGuess > randomNumber) {
    outcomeElement.textContent = 'Too high! Keep trying.';
  } else {
    outcomeElement.textContent = 'Congrats! Correct';
    userGuessElement.disabled = true;
}
}