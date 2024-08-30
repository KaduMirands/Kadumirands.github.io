(READ IN RAW)
Video: https://youtu.be/ec8vSKJuZTk?si=h5JsKe1zhxa6CeV3

Personal Additions:

Functionality 1 (Game Over message with restart button)

-----------------------------------

I - Added the new content and classes at the HTML and CSS

II - Added |||* gameOverContainer.style.display = 'block'; *||| at countDown function so the display:'none' is removed and the content shown

III - Added |||* gameOverMessage.textContent = `Its all over! Your final score is ${result}` *||| at couontDown function, making use of the span class to script a text into it and show the result as string, converted by using the $

IV - Created the event of click for the restartButton, and for the function event of the buttonClicked:
    #  ||* currentTime = 60 *|| Added so the timer resets to 60s as the default
    #  ||* timeLeft.textContent = currentTime *|| catching the timer defined at the countDown function and redefining it for the click event
    #  ||* result = 0 *|| Redefining the result in the click event
    #  ||* score.textContent = 0 *|| Redefining the score for the click event
    #  ||* clearInterval(timerId) *|| Clear the timer of the mole
    #  ||* clearInterval(countDownTimerId) *|| Clear the last countdown timer
    #  ||* countDownTimerId = setInterval(countDown, 1000) *|| Sets a new timer

-----------------------------------


