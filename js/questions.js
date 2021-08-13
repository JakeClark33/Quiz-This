// GIVEN I am taking a code quiz
// WHEN I click the start button
//Create an event listener toi start the timer interval.a

 //THEN a timer starts and I am presented with a question


// WHEN I answer a question

// Create an array of all of the questions
// All questions will need a title multiple choices and an answer.
 //Creeate a function that will ask one question at a time.

 

 function generateQuiz (quizContainer, resultsContainer, SubmitButton) {
displayQuestions()

    function displayQuestions (QuizContainer){


        var output = [];

        var answers;

        //for each question reset the list of answers to

        for(var i = 0; i < quizQuestions.length; i++) {

            var answers= quizQuestions[i].answers;
            console.log(answers);
            
            var choiceElement = document.querySelector('.choices');

           var newQuestion = document.querySelector('.question-text');
        //    quizQuestions[i].questions
           var quizMainQuestion = quizQuestions[i].question;
           newQuestion.textContent = quizMainQuestion;

            for (var j=0; j<answers.length; j++) {
                console.log(answers[j]);
                var btn  = document.createElement('button')


            // var btn = document.querySelector('.choices');

            btn.setAttribute('class', 'answers')
            btn.setAttribute('value', answers[j]);
            btn.textContent = j + answers [j]
            choiceElement.append(btn);
            }
        //create an index for that  = 0, every time answer is clicked, index increases by 1 to get to the next question.
        
        //add buttons for answers
// Target index of current question to display current index only
// Target the value qof the button as well. Pressed button, to compare to the correct answer in the object. 
     


}

        // output.push(
    
        //     '<div class="question">' + questions[i].question + '</div>'

        //     + '</div class="answers">'  + answers.join('') + '</div>'
    
        // );

    quizContainer.innerHTML = output.join('');
  
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

        answers: ['Curly Brackets','Parentheses', 'Backticks','commas'],
    

            correctAnswer: 'Curly Brackets'

     },

            

     {

        question:'Commonly used data types do not include _______.',

        answers: ['Booleans','Alerts','Strings','Numbers'],


            correctAnswer: 'Alerts'

     },


     
     {

        question: 'The condition in an if/else statement is enclosed with ____________.',

        answers: ['Curly Brackets','Backticks','Commas','Parentheses',],

            correctAnswer: 'Parentheses',

     },


     {
     
        question: 'Arrays in JavaScript can be used to store ___________.',

        answers: ['Booleans','Numbers and Arrays','Strings','All of the above'],
          

            correctAnswer: 'All of the above'

     },


     
     {

        question: 'A useful tool for development and debugging for printing to the debugger is _____________.',

        answers: ['For Loops','JavaScript','Terminal Bash', 'All of the above'],
    

        correctAnswer: 'For Loops'

     }]


     var buttonEl = document.querySelector('.btn1');
     let queEl;
     
     
     buttonEl.addEventListener('click', generateQuiz);



 //create a time interval
 
 
 
 //create a certain amoiunt of time to give the user. Counting down from 60-0. 
 
 
 
 //decrease time by 5 seconds when questions are answered incorrectly.


// THEN I am presented with another question

// WHEN I answer a question incorrectly

// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0


// THEN the game is over


// WHEN the game is over
//use local storage to keep the score.
// THEN I can save my initials and score
//pull from local storage to see top scores. 
//given ability to enter user initials for high score.a
//high scores created on a separate page. 