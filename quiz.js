// writting  letter by letter

var string = "What's the name of the video game company that offers to help Stefan develop -Bandersnatch- ?";
var choice1 = 'Tuckersoft';
var choice2 = 'Videlectrix';
var ind = 0;
var text = '';

(function type(){

  text= string.slice(0, ++ind);

  document.querySelector('.question').textContent = text;

  if(ind != string.length){
  setTimeout(type, 90);
}}());

  document.querySelector('.choice1').textContent = choice1;
  document.querySelector('.choice2').textContent = choice2;

let questions = [
  {
    question: "What's the name of the video game company that offers to help Stefan develop -Bandersnatch- ?",
    choice1: "Tuckersoft",
    choice2: "Videlectrix",
    answer: "Tuckersoft"
  },
  {
    question: " Why does five-year-old Stefan refuse to get on the train with his mother?",
    choice1: "He feels ill",
    choice2: "He doesn't have his stuffed rabbit",
    answer: "He doesn't have his stuffed rabbit"
  },
  {
    question: "What is the first choice that a viewer makes at the beginning of the film? ",
    choice1: "What Stefan eats for breakfast",
    choice2: "What music he listens to",
    answer: "He doesn't have his stuffed rabbit"
  }
];
/*

const question = document.querySelector('.question');
const choice = Array.from(document.querySelectorAll('.choice'));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



startQuiz = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () =>{
  if(availableQuestions.length == 0){
    localStorage.setItem('mostRecentScore');
    return window.location.assign('/endQuiz.html');
  }

  questionCounter++;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;

}

choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false;
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct'){
      incrementScore(1)
    }

    selectedChoice.parentElement.classList.add(classToApply)
  })
});

incrementScore = num => {
  score +=number
}

startGame()
*/
