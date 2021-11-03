var score = sessionStorage.getItem('score');
let text
ind = 0
maxScore = 10
let conv = [
  'WOW, YOU ARE A TRUE FAN',
  'GREAT JOB',
  'MEH, WATCH THE MOVIE AGAIN'
]

document.querySelector('.convo').textContent = score + "/" + maxScore;
if(score <= Math.floor(0.5*maxScore))  q = conv[2]
else if(score < Math.floor(0.8*maxScore)) q = conv[1]
else q = conv[0]

function type()
{
  text = q.slice(0, ++ind);

  document.querySelector('#convo').textContent = text;

  if(ind != q.length)
    setTimeout(type, 50);
}

type();
