Watchalong practice from freecodeCamp Ania Kubow

https://www.youtube.com/watch?v=ec8vSKJuZTk&t=312s

Personal adittion:

Addition #1- User and computer score:

Step 1: Created the variables user choice and computer choice, grabbing the html and css elements.

Step 2: Created the updateScores function, and added the RPS logics for the user and the computer score

Step 3: Noticed an error in the originial code, there wasnt any parameter for the clickevent, change from ""choice => choice.addEventListener('click', (e) =>"" to
""(choice => {choice.addEventListener('click', (e) => {"
Adding 2 new "{"

