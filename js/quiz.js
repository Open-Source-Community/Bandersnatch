// writting  letter by letter

var q = "What's the name of the video game company that offers to help Stefan develop -Bandersnatch- ?";
var c1 = 'Tuckersoft'
var c2 = 'Videlectrix'
var ans;
var text = '';
var ind = 0;
var score = 0;

function type()
{
  text = q.slice(0, ++ind);

  document.querySelector('.question').textContent = text;

  if(ind != q.length)
    setTimeout(type, 50);
}



function typech1()
{

  text= c1.slice(0, ++ind);

  document.querySelector('.choice1').textContent = text;

  if(ind != c1.length)
    setTimeout(typech1, 50);

}

function typech2(){

  text = c2.slice(0, ++ind);

  document.querySelector('.choice2').textContent = text;

  if(ind != c2.length)
    setTimeout(typech2, 50);
  
}
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
function nextQ(i)
{

  c1 = questions[i].choice1;
  c2 = questions[i].choice2;
  q = questions[i].question;
  ans = questions[i].answer;
  
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
var i = 0;
nextQ(i);
userAns = "";


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
  if(i < questions.length) 
    nextQ(++i)
  else
    console.log("your score is " + score)
}