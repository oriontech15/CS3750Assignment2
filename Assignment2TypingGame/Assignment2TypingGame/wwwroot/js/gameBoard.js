//const words = <% this.#Assignment2TypingGame.Csharp.GetWords(1) %>

var seconds = 60;

$(document).ready(function() {
    startGame();
});


function JSgetWords() {
    return words;
}

function getNextWord() {
    return words[++words.current]
}

//This function is called when the start game button is clicked
function startGame() {

    startClock();
    runClock();
    let name = document.cookie;
    document.getElementById("playerName").value = name;
    //document.getElementById("playerName").innerHTML = localStorage.username;
}

function startClock() {
    clockId = setInterval(runClock, 1000);
    //This will have the runClock method call every 1 second
}

//This method will reduce the seconds variable by 1 every second and display it to the screen.
function runClock() {

    seconds -= 1;
    // This will decrement the seconds variable by 1
    document.getElementById("timer").innerHTML = seconds;
    // This will set the timer element to what is being seen in the seconds variable
    if (seconds == 0) {
        stopClock();
    }
}

function stopClock() {
    clearInterval(clockId)
    var score1 = document.getElementById("player1Score").innerHTML;
    var score2 = document.getElementById("player2Score").innerHTML;
    if (score1 < score2) {
        window.alert("You lose");
    } else {
        window.alert("You win");
    }

    document.getElementById("player1Input").disabled = true;
}

function loadStartingScore() {
    document.getElementById("player1Score").innerHTML = "000";
    document.getElementById("player2Score").innerHTML = "000";
}

function init() {
    loadStartingScore();
}

init();

//var Btn = document.getElementById("submitBtn");

function saveUsername() {
    var name = document.getElementById("inputUsername").value;
    document.cookie = name;
    //localStorage.username = document.getElementById("inputUsername").value;

}