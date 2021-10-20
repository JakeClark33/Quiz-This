let currentQuestionIdx = 0;
let time = 75;
let correctAnswers = 0;

// Store HTML elements as variables
const startBtnEl = document.getElementById('modalBtn');
const timerEl = document.getElementById('timer');
const choicesEl = document.getElementById('allChoices');
const questionTxtEl = document.getElementById('questions');
const questionWrapperEl = document.getElementById('question-wrapper');
const resultsWrapperEl = document.getElementById('results-wrapper');
const scoreEl = document.getElementById('score');
const submitBtnEl = document.getElementById('submitBtn');


const timeStart = () => {
    const timerId = setInterval(function (){
        time--;
        timerEl.textContent = time;
        if (time === 0 ){
            clearInterval(timerId);
        }
    }, 1000);
}

const displayQuestions = () => {
    const {answers, question} = quizQuestions[currentQuestionIdx];
    
    questionTxtEl.textContent = question;
    choicesEl.innerHTML = '';

    for (let i=0; i < answers.length; i++) {
        buildAnswerButton(answers[i], quizQuestions[currentQuestionIdx].correctAnswer);
    }
}

const buildAnswerButton = (answer, correctAnswer) => {
    const handleAnswerBtnClick = () => {
        if (answer === correctAnswer){
            alert('That is correct!');
            correctAnswers++;
        }else {
            time-= 5;
            alert('Better luck next time!');
        }

        currentQuestionIdx++

        if (currentQuestionIdx < quizQuestions.length) {
            displayQuestions();
        } else {
            endQuiz();
        }
    }

    const btn  = document.createElement('button');
    btn.onclick = handleAnswerBtnClick;
    btn.setAttribute('class', 'answers');
    btn.textContent = answer;
    choicesEl.append(btn);
}

const handleStartClick = () => {
    timeStart();
    displayQuestions();
}

const endQuiz = () => {
    console.log("No more questions");
    scoreEl.textContent = correctAnswers;
    questionWrapperEl.style.display = 'none';
    resultsWrapperEl.style.display = 'block';
}

const handleSubmitClick = () => {
    
}

startBtnEl.addEventListener('click', handleStartClick);
submitBtnEl.addEventListener('click', handleSubmitClick);
