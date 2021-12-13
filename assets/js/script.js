var roundTime = 5;
var count = 0;
var opMove;
var roundNumber = 0;
var activeCombo = false;
var gameActive = false;
var score = 0;
var comboMult = 1;
var timerVar;
var highScore = localStorage.getItem("highscore");
var finalScore;

//document.getElementById("rock").addEventListener("mouseover", hoverAnswer("rock"));
document.getElementById("rock").addEventListener("click", function(){answer(1)});

document.getElementById("paper").addEventListener("click", function() {answer(2)});
//document.getElementById("paper").addEventListener("mouseover", hoverAnswer("paper"));
document.getElementById("scissors").addEventListener("click", function(){answer(3)});
//document.getElementById("scissors").addEventListener("mouseover", hoverAnswer("scissors"));

document.getElementById("start-btn").addEventListener("click", function(){startGame()});

if (highScore === NaN) {
    highScore = 0;
}
setHighScore(highScore);

newRound()

function newRound(){
    document.getElementById("score").innerHTML = "Score " + score
    if (roundNumber > 10 && activeCombo === false) {
        gameOver();
    }
    else {
        opMove = (Math.floor(Math.random() * 3) + 1);
        if (opMove < 2){
            //console.log("Rock!");
            document.getElementById("opponent-move").innerHTML = "&#9994"; //rock
        }
        else if (opMove < 3){
            //console.log("Paper!");
            document.getElementById("opponent-move").innerHTML = "&#9995"; //paper
        }
        else if (opMove < 4){
            //console.log("Scissors!");
            document.getElementById("opponent-move").innerHTML = "&#9996"; //scissors
        };
        roundTime = 5
        document.getElementById("time-remain").innerHTML = roundTime;
        roundNumber += 1
        //console.log("Round: " + roundNumber);
    }
}

function answer(a) {
    if (gameActive) {
        //console.log("Clicked: " + a)
        //console.log("enemy move: " + opMove)
        if (a === opMove){ //draw - no points
            //console.log("Should've drawn");
            wombo(false);
            newRound();
        }
        else if ((a === 1 && opMove === 2) || (a === 2 && opMove === 3) || (a === 3 && opMove === 1)) { //player loss
            //console.log("should've lost");
            score -= 50;
            wombo(false);
            newRound();
        } 
        else if ((a === 1 && opMove === 3) || (a === 2 && opMove === 1) || (a === 3 && opMove === 2)) { //player wins
            if (roundTime >= 3){
                wombo(true);
            }
            else {
                wombo(false);
            }
            //console.log("should've won");
            score += (50 * comboMult);
            newRound();
        }
    }
}

function wombo(wombo){
    if (!wombo) {
        activeCombo = false 
        document.getElementById("wombo-combo").style.display = "none";
        return;
    }
    else if (comboMult <= 5){
        comboMult ++
    }
    activeCombo = true;
    document.getElementById("wombo-combo").style.display = "inline";
}

function timerFunc(){
    if (roundTime > 0) {
    roundTime -= 1
    console.log(roundTime);
    console.log(activeCombo);
    document.getElementById("time-remain").innerHTML = roundTime;
    }
    else {
        wombo(false);
        console.log(roundTime);
        console.log(activeCombo);
        newRound();
    }
}

function gameOver(){
    scoreHandler()
    gameActive = false;
    roundtime = 0;
    document.getElementById("time-remain").innerHTML = roundTime;
    clearInterval(timerVar);
    document.getElementById("start-btn").style.display = "inline";
    document.getElementById("game-over").style.display = "inline";
};

function startGame(){
    resetGame()
    gameActive = true;
    document.getElementById("game-over").style.display = "none";
    document.getElementById("start-btn").style.display = "none";
    timerVar = setInterval(function(){ 
    timerFunc(); }, 1000);
}

function resetGame(){
    score = 0;
    roundNumber = 0;
    activeCombo = false;
    document.getElementById("score").innerHTML = "Score " + score;
}

function scoreHandler(){
    finalScore = score;
    if (finalScore > highScore) {
        alert("Wow, that's a new high score!")
        localStorage.setItem("highscore", score)
        setHighScore(score)
    }
}

function setHighScore(newScore) {
    document.getElementById("high-score").innerHTML = "High Score " + newScore;
};