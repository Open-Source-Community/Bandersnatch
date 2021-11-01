const quotes = [
    "a bit of madness is what you need and that works best when it's one mind.",
    "wrong path mate.",
    "You're just a puppet. You're not in control.",
    "So, why not commit murder? Maybe that's what destiny wants.",
    "You're in the hole.",
    "People think there's one reality but there's loads of them, all snaking off, like roots. \nAnd what we do on one path affects what happens on the other paths. \nTime is a construct. People think you can't go back and change things, \nbut you can, that's what flashbacks are, they're invitations to go back and make different choices.",
    "When you make a decision, you think it's you doing it, but it's not. \nIt's the spirit out there that's connected to our world that decides what we do and we just have to go along for the ride.",
    "Mirrors let you move through time.",
    "The government monitors people, they pay people to pretend to be your relatives and they put drugs in your food and they film you. ",
    "There's messages in every game. Like Pac-Man. Do you know what PAC stands for? \"Program And Control.\".",
    "He's Program and Control Man, the whole thing's a metaphor, he thinks he's got free will but really he's trapped in a maze, in a system, all he can do is consume, he's pursued by demons that are probably just in his own head, and even if he does manage to escape by slipping out one side of the maze what happens? He comes right back in the other side.",
    "People think it's a happy game, it's not a happy game, it's a fucking nightmare world and the worst thing is it's real and we live in it.",
    "It's all code. If you listen closely, you can hear the numbers.",
    "There's a cosmic flowchart that dictates where you can and where you can't go.",
    "I've given you the knowledge. I've set you free. Do you understand?",
    "We're on one path. Right now, me and you.",
    "It wouldn't matter because there are other timelines, Stefan. \nHow many times have you watched Pac-Man die? Doesn't bother him. He just tries again.",
    "Please get away from me. I'm not in control. Please, I'm not in control.",
    "Now they've got the illusion of free will, but really I decide the ending.",
    "You're not hearing voices or...?",
    "Your fate has been dictated, it's out of your hands.",
    "You're not alone. We're in it together. One for all, and all for one."

];


const trivia = [
    "Has Inaccessible Scenes.",
    "The Whole Film Was Shot In 7 Weeks.",
    "Was Based On A Real Unreleased 80s Game."
];

var choice = Math.floor(Math.random() * 2);
if(choice === 0)
{
    document.getElementById('bg').style.backgroundImage = "url('../imgs/quotes.gif')";
    document.getElementById('type').style.color = "#cacacab7";
    document.getElementById('quote').style.color = "#cacacab7";
    document.getElementById('space').style.color = "#cacacab7";
    
    var random = Math.floor(Math.random()*quotes.length)
    document.getElementById('type').textContent = "QUOTE #" + (random + 1); 
    document.getElementById('quote').textContent = quotes[random];
}
else 
{
    document.getElementById('bg').style.backgroundImage = "url('../imgs/trivia.gif')";
    document.getElementById('type').style.color = "#242424b7";
    document.getElementById('quote').style.color = "#242424b7";

    var random = Math.floor(Math.random()*trivia.length)
    document.getElementById('type').textContent = "FUN FACT #" + ( random + 1) ; 
    document.getElementById('quote').textContent = trivia[random];
}

document.body.onkeyup = function(e)
{
    if(e.keyCode == 32)
    {
        var choice = Math.floor(Math.random() * 2);
        // quote
        if(choice === 0)
        {
            document.getElementById('bg').style.backgroundImage = "url('../imgs/quotes.gif')";
            document.getElementById('type').style.color = "#cacacab7";
            document.getElementById('quote').style.color = "#cacacab7";
            document.getElementById('space').style.color = "#cacacab7";

            var random = Math.floor(Math.random()*quotes.length)
            document.getElementById('type').textContent = "QUOTE #" + (random + 1); 
            document.getElementById('quote').textContent = quotes[random];
        }
        else 
        {
            document.getElementById('bg').style.backgroundImage = "url('../imgs/trivia.gif')";
            document.getElementById('type').style.color = "#242424b7";
            document.getElementById('quote').style.color = "#242424b7";;
            document.getElementById('space').style.color = "#242424b7";;
            
            var random = Math.floor(Math.random()*trivia.length)
            document.getElementById('type').textContent = "FUN FACT #" + ( random + 1) ; 
            document.getElementById('quote').textContent = trivia[random];
        }
    }
}