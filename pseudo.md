## pseudo for overall project

## theme candidates

- Dragonball trivia (obviously)
- Video game trivia?
- What if...it was rock paper scissors but your score was based on time remaining per "question" and your score received large penalties for non-winning choices, zero multiplier for a draw, lose points for a loss.
- expanding on RPS idea, we could randomize the order of "questions" or just randomize which of the 3 shows up each time.

I like the RPS idea a lot, it's interesting and would let us flex more concepts, unsure if our grade would suffer from deviating from trivia.

write a function that displays a countdown, give just 10 seconds per "question" for RPS game, if actual trivia allow 30.

## JS

var tLimit = 10

document.getElementByClass("answer").addEventListener("mouseover", hoverAnswer)
document.getElementById("rock").addEventListener("click", answer("rock")
document.getElementById("paper").addEventListener("click", answer("paper"))
document.getElementById("scissors").addEventListener("click", answer("scissors"))

function answer(aString){
  
}

function timerReset(){
  tLimit = 10
}

function newRound{

}

var tRemain = setInterval(function() {
  //set the text of an element inside a div to the remaining time
  tLimit -= 1
}, 1000);

