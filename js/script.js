 // Build elements for the home page
 
 //Create a High Score link 
    // Create a new Index.html for high scores



 //Create a start button 
    //THEN a timer starts and I am presented with a question
    var timestart = 75;
    //WHEN I answer a question
    //THEN I am presented with another question
    //WHEN I answer a question incorrectly
    //THEN time is subtracted from the clock
    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over
    //WHEN the game is over
    //THEN I can save my initials and score

    // Create timer function
    function timer001() {
        timestart= timestart - 1;
        if (c < 75) {
            timer001.innerhtml = timestart;
        }
        if (c < 1) {
           window.clearInterval(update); 
        }
    }
    update = setInterval("timer001", 1000)