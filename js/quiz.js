// writting  letter by letter

let q
let text
let ind
let c1
let c2
let ans
let score = 0
let userAns = ""
let i = 0

let questions = [
  {
    question: "What's the name of the video game company that offers to help Stefan develop -Bandersnatch- ?",
    choice1: "Tuckersoft",
    choice2: "Videlectrix",
    answer: "Tuckersoft"
  },
  {
    question: "Why does five-year-old Stefan refuse to get on the train with his mother?",
    choice1: "He feels ill",
    choice2: "He doesn't have his stuffed rabbit",
    answer: "He doesn't have his stuffed rabbit"
  },
  {
    question: "What is the first choice that a viewer makes at the beginning of the film?",
    choice1: "What Stefan eats for breakfast",
    choice2: "What music he listens to",
    answer: "What Stefan eats for breakfast"
  },
  {
    question: "Colin and his girlfriend Kitty have a daughter. What is her name?",
    choice1: "Pearl",
    choice2: "Ruby",
    answer: "Pearl"
  },
  {
    question: "Stefan's game, -Bandersnatch-, is based on the Lewis Carroll poem of the same name.",
    choice1: "True",
    choice2: "False",
    answer: "False"
  },
  {
    question: "What is the name of the actor that plays Stefan Butler?",
    choice1: " Will Poulter",
    choice2: " Fionn Whitehead",
    answer: " Fionn Whitehead"
  },
  {
    question: "What must the viewer influence Stefan to do in order to guarantee the best possible review scores for -Bandersnatch-?",
    choice1: " Murder his father",
    choice2: " Murder Colin",
    answer: " Murder his father"
  },
  {
    question: "What game is Colin Ritman seen working on when he and Stefan first meet?",
    choice1: "Pytfahl",
    choice2: "Nohzdyve",
    answer: "Nohzdyve"
  },
  {
    question: "Which of these songs does not appear in the film?",
    choice1: "-Making Plans for Nigel- by XTC",
    choice2: "-The Reflex- by Duran Duran",
    answer: "-The Reflex- by Duran Duran"
  },
  {
    question: "One of the film's recurring visual motifs is a symbol representing the potential branching paths of Stefan's story. What earlier -Black Mirror- episode also prominently featured this symbol?",
    choice1: "Hang The DJ",
    choice2: "White Bear",
    answer: "White Bear"
  }
];

function type()
{
  text = q.slice(0, ++ind);

  document.querySelector('.question').textContent = text;

  if(ind != q.length)
    setTimeout(type, 50);
}



function typech1()
{
  document.querySelector('#choice1').textContent = c1;
}

function typech2()
{
  document.querySelector('#choice2').textContent = c2;
}

function nextQ(i)
{
  c1 = questions[i].choice1;
  c2 = questions[i].choice2;
  q = questions[i].question;
  ans = questions[i].answer;
  ind = 0;

  type();
  typech1();
  typech2();
}
window.onload=function(){
  var ch1ele = document.getElementById("choice1");
  ch1ele.addEventListener("click", chose1);
  var ch2ele = document.getElementById("choice2");
  ch2ele.addEventListener("click", chose2);

}

nextQ(i);

function chose1()
{
  console.log("chose1")
  userAns = questions[i].choice1;
  validate(userAns)
}
function chose2()
{
    console.log("chose2")
    userAns = questions[i].choice2;
    validate(userAns)
}

function validate(answ)
{
  console.log(i)

  if(answ === questions[i].answer)
  {
    score++;
    console.log(score)
  }
  sessionStorage.setItem('score', score);
  if(i == questions.length - 1){

    location.replace("endQuiz.html") ;}
  else{
  console.log("i++")
  nextQ(++i);
    }

}
