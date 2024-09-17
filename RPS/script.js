const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const userScoreDisplay = document.getElementById('user-score')
const computerScoreDisplay = document.getElementById('computer-score')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        userChoice = e.target.id;
        userChoiceDisplay.innerHTML = userChoice;
        generateComputerChoice();
        updateScores();
    });
});

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * 3)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
    
}

function updateScores() {
    if ((computerChoice === 'rock' && userChoice === 'scissors') ||
        (computerChoice === 'scissors' && userChoice === 'paper') ||
        (computerChoice === 'paper' && userChoice === 'rock')) {
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else if (userChoice !== computerChoice) {
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    }
}
