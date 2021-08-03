// GIVEN I am taking a code quiz
// WHEN I click the start button
Create an event listener toi start the timer interval.a

 THEN a timer starts and I am presented with a question


// WHEN I answer a question

// Create an array of all of the questions
// All questions will need a title multiple choices and an answer.
 Creeate a function that will ask one question at a time.



 function generateQuiz (questions, quizContainer, resultsContainer, SubmitButton) {


    function displayQuestions (questions, QuizContainer){


    }

    function displayResults(questions, quizContainer, resultsContainer){


    }
    
    
    displayQuestions(questions, QuizContainer);


    submitButton.onclick = function(){

            displayResults(questions, quizContainer, resultsContainer);
    }

 }

 var quizQuestions = [
     {
        question: "String Values must be enclosed with __________ when being assigned to variables?",

        answers: {

            a: 'Curly Brackets',

            b: 'Parentheses',

            c: 'Backticks',

            d: 'commas'

        },

            correctAnswer: 'a'

     },

            

     {

        question:'Commonly used data types do not include _______.',

        answers: {

            a: 'Booleans',

            b: 'Alerts',

            c: 'Strings',

            d: 'Numbers',

        },

            correctAnswer: 'b'

     },


     
     {

        question: 'The condition in an if/else statement is enclosed with ____________.',

        answers: {

            a: 'Curly Brackets',

            b: 'Backticks',

            c: 'Commas',

            d: 'Parentheses',

        },

            correctAnswer: 'd',

     },


     {
     
        question: 'Arrays in JavaScript can be used to store ___________.',

        answers: {
            a: 'Booleans',

            b: 'Numbers and Arrays',

            c: 'Strings',

            d: 'All of the above',
       
        },

            correctAnswer: 'd'

     },


     
     {

        question: 'A useful tool for development and debugging for printing to the debugger is _____________.',

        answers: {

            a: 'For Loops',

            b: 'JavaScript',

            c: 'Terminal Bash',

            d: 'All of the above',

        },

        correctAnswer: 'a'

     },





 create a time interval
 
 
 
 create a certain amoiunt of time to give the user. Counting down from 60-0. 
 
 
 
 decrease time by 5 seconds when questions are answered incorrectly.


// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0


// THEN the game is over


// WHEN the game is over
use local storage to keep the score.
// THEN I can save my initials and score
pull from local storage to see top scores. 
given ability to enter user initials for high score.a
high scores created on a separate page. 