const squares = document.querySelectorAll('.square')
const colors = ['#038221']
let previousSquare = null
let score = 0;
let highScore = 0;
const scoreElement = document.getElementById('score')
const gameOverContainer = document.getElementById('game-over-container')
const gameOverMessage = document.getElementById('game-over-message')
const highScoreMessage = document.getElementById('high-score-message')
const botaoRestart = document.getElementById('botao-restart')

let gamePause
let gameTimeout
let squareClicked = false

function changeColor() {
    if (!squareClicked && previousSquare) {
        gameOver()
        return 
    }

    const randomSquare = squares[Math.floor(Math.random() * squares.length)]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    randomSquare.style.backgroundColor = randomColor
    randomSquare.textContent = "(00)" 

    if (previousSquare) {
        previousSquare.style.backgroundColor = 'black'
        previousSquare.textContent = '' 
    }

    previousSquare = randomSquare
    squareClicked = false

   
    clearTimeout(gameTimeout)
    gameTimeout = setTimeout(() => {
        if (!squareClicked) {
            gameOver()
        }
    }, 1000)
}

squares.forEach(square => {
    square.addEventListener('click', function() {
        if (this.style.backgroundColor !== 'black') {
            this.style.backgroundColor = 'black'
            this.textContent = "(XX)" 
            score++
            scoreElement.textContent = score
            previousSquare = null
            squareClicked = true
            clearTimeout(gameTimeout)
            
            
            setTimeout(() => {
                this.textContent = '' }, 500)
            }
        });
    });
            

    function startGame() {
        score = 0
        scoreElement.textContent = score
        gameOverContainer.style.display = 'none'
        previousSquare = null
        squareClicked = true
        clearInterval(gamePause)
    
        
        squares.forEach(square => {
            square.style.backgroundColor = 'black'
            square.textContent = ''
        });
    
        gamePause = setInterval(changeColor, 1000)
    }

function gameOver() {
    clearInterval(gamePause)
    clearTimeout(gameTimeout)
    highScore = Math.max(highScore, score)
    highScoreMessage.textContent = `Seu melhor foi: ${highScore}`
    gameOverContainer.style.display = 'block'
}

botaoRestart.addEventListener('click', startGame)

startGame()
