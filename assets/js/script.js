var roundTime = 5;
var count = 0;
var opMove;
var roundNumber = 0;
var activeCombo = false;
var gameActive = true;
var score = 0;
var comboMult = 1;
var timerVar;

//document.getElementById("rock").addEventListener("mouseover", hoverAnswer("rock"));
document.getElementById("rock").addEventListener("click", function(){answer(1)});

document.getElementById("paper").addEventListener("click", function() {answer(2)});
//document.getElementById("paper").addEventListener("mouseover", hoverAnswer("paper"));
document.getElementById("scissors").addEventListener("click", function(){answer(3)});
//document.getElementById("scissors").addEventListener("mouseover", hoverAnswer("scissors"));

document.getElementById("start-btn").addEventListener("click", function(){startGame()});

newRound()

function newRound(){
    document.getElementById("score").innerHTML = "Score " + score
    if (roundNumber > 10 && !activeCombo) {
        gameOver();
    }
    else {
        opMove = (Math.floor(Math.random() * 3) + 1);
        if (opMove < 2){
            console.log("Rock!");
            document.getElementById("opponent-move").innerHTML = "&#9994"; //rock
        }
        else if (opMove < 3){
            console.log("Paper!");
            document.getElementById("opponent-move").innerHTML = "&#9995"; //paper
        }
        else if (opMove < 4){
            console.log("Scissors!");
            document.getElementById("opponent-move").innerHTML = "&#9996"; //scissors
        };
        roundTime = 5
        document.getElementById("time-remain").innerHTML = roundTime;
        roundNumber += 1
        console.log("Round: " + roundNumber);
    }
}

function answer(a) {
    if ((gameActive) || (roundNumber < 11)) {
        console.log("Clicked: " + a)
        console.log("enemy move: " + opMove)
        if (a === opMove){ //draw - no points
            console.log("Should've drawn");
            activeCombo = false;
        }
        else if ((a === 1 && opMove === 2) || (a === 2 && opMove === 3) || (a === 3 && opMove === 1)) { //player loss
            console.log("should've lost");
            score -= 50;
            activeCombo = false;
            newRound()
        } 
        else if ((a === 1 && opMove === 3) || (a === 2 && opMove === 1) || (a === 3 && opMove === 2)) { //player wins
            if (roundTime > 3){
                wombo();
            };
            console.log("should've won");
            score += (50 * comboMult);
            newRound()
        }
    }
}

function wombo(){
    if (comboMult <= 5){
        comboMult ++
    }
    activeCombo = true;
}

function timerFunc(){
    if (roundTime > 0) {
    console.log(roundTime)
    roundTime -= 1
    document.getElementById("time-remain").innerHTML = roundTime;
    }
    else {
        newRound()
    }
}

function gameOver(){
    gameActive = false;
    roundtime = 0;
    document.getElementById("time-remain").innerHTML = roundTime;
    clearInterval(timerVar);
    document.getElementById("start-btn").style.display = "inline";
};

function startGame(){
    resetGame()
    document.getElementById("start-btn").style.display = "none";
    timerVar = setInterval(function(){ 
    timerFunc(); }, 1000);
}

function resetGame(){
    score = 0;
    roundNumber = 0;
    activeCombo = false;
    document.getElementById("score").innerHTML = "Score: " + score;
}