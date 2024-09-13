const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => addEventListener('click', (e) =>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor (Math.random() * 3)

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if (randomNumber === 1) {
        computerChoice = 'scissor'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
    
}