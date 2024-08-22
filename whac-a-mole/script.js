const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

const gameOverMessage = document.getElementById('game-over-message')
const gameOverContainer = document.getElementById('game-over-container')
const restartButton = document.getElementById('restart-button')

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomSquare = squares[Math.floor(Math.random() * 9)]
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})


function moveMole() {
  timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   gameOverContainer.style.display = 'block';
   gameOverMessage.textContent = `Its all over! Your final score is ${result}`;
  }
}

function buttonClicked() {

  currentTime = 60
  timeLeft.textContent = currentTime
  result = 0
  score.textContent = 0
  clearInterval(timerId)
  clearInterval(countDownTimerId)
  moveMole()
  countDownTimerId = setInterval(countDown, 1000)
  gameOverContainer.style.display = 'none'
  
}
  
restartButton.addEventListener('click', buttonClicked)
  
let countDownTimerId = setInterval(countDown, 1000)
  
  
   



  
   
   
   
   









