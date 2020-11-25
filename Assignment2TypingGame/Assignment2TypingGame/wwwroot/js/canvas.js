/******************************/
/**** SETUP DEFAULT VALUES ****/
/******************************/

var words = ["backyard", "back", "backup", "backstroke", "backstreet", "word", "the", "be", "to", "of", "and", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"]
var currentWords = [];
var wordIndex = 0;

function init() {
    loadStartingWords();
    gameLoop(); // Starts Canvas Animation Loop
}

/**** PLAYER 1 INITIAL VALUES ****/
var word1Speed = getRandomValue();
var word2Speed = getRandomValue();
var word3Speed = getRandomValue();
var word4Speed = getRandomValue();
var word5Speed = getRandomValue();

var player1input = document.getElementById('player1Input')
var player1Point = 0
var input = "";

var word1Y = 0;
var word2Y = 0;
var word3Y = 0;
var word4Y = 0;
var word5Y = 0;

/**** PLAYER 2 INITIAL VALUES ****/
var player2Word1Y = 0;
var player2Word2Y = 0;
var player2Word3Y = 0;
var player2Word4Y = 0;
var player2Word5Y = 0;

var player2Speed1 = 0;
var player2Speed2 = 0;
var player2Speed3 = 0;
var player2Speed4 = 0;
var player2Speed5 = 0;

var player2Word1 = "";
var player2Word2 = "";
var player2Word3 = "";
var player2Word4 = "";
var player2Word5 = "";

var player2CurrentInput = "";

/**********************/
/**** CANVAS SETUP ****/
/**********************/

var canvas1 = document.getElementById("canvasPlayer1");
var canvas2 = document.getElementById("canvasPlayer2");
let context1 = canvas1.getContext("2d");
let context2 = canvas2.getContext("2d");

let padding = 10;
let wordBoxWidth = (canvas1.width / 5) - (padding / 2 + 5);
let wordBoxHeight = wordBoxWidth / 3;

let wordColorPlayer1 = '#000';
let wordColorPlayer2 = '#FFF';
let highlightColor = 'red';

// Load starting words for Player 1
function loadStartingWords() {
    for (var i = 0; i < 5; i++) {
        currentWords.splice(i, 0, words[i]);
        words.splice(i, 1);
        wordIndex = i;
    }
}

// Key up event to check if Player 1's input equals a currently displayed word
player1input.addEventListener('keyup', function(e) {
    input = document.getElementById('player1Input').value
    if (input == currentWords[0]) {
        word1Y = 0
        player1Point += 1
        document.getElementById('player1Input').value = ""
        document.getElementById('player1Score').innerHTML = player1Point

        currentWords.splice(0, 1, getNextWord());
    }
    if (input == currentWords[1]) {
        word2Y = 0
        player1Point += 1
        document.getElementById('player1Input').value = ""
        document.getElementById('player1Score').innerHTML = player1Point

        currentWords.splice(1, 1, getNextWord());
    }
    if (input == currentWords[2]) {
        word3Y = 0
        player1Point += 1
        document.getElementById('player1Input').value = ""
        document.getElementById('player1Score').innerHTML = player1Point

        currentWords.splice(2, 1, getNextWord());
    }
    if (input == currentWords[3]) {
        word4Y = 0
        player1Point += 1
        document.getElementById('player1Input').value = ""
        document.getElementById('player1Score').innerHTML = player1Point

        currentWords.splice(3, 1, getNextWord());
    }
    if (input == currentWords[4]) {
        word5Y = 0
        player1Point += 1
        document.getElementById('player1Input').value = ""
        document.getElementById('player1Score').innerHTML = player1Point

        currentWords.splice(4, 1, getNextWord());
    }

})

// Draws the current words for Player 1 on the Player 1 Canvas element
function drawPlayer1Canvas() {
    var word1 = currentWords[0];
    var word2 = currentWords[1];
    var word3 = currentWords[2];
    var word4 = currentWords[3];
    var word5 = currentWords[4];

    context1.clearRect(0, 0, canvas1.width, canvas1.height);

    context1.font = "30px Arial";

    context1.fillStyle = wordColorPlayer1;
    context1.fillText(word1, padding + 5, word1Y, wordBoxWidth);

    if (compareInput(word1, input)) {
        context1.fillStyle = highlightColor;
        context1.fillText(input, padding + 5, word1Y, wordBoxWidth);
    }

    context1.fillStyle = wordColorPlayer1;
    context1.fillText(word2, wordBoxWidth + padding + 10, word2Y, wordBoxWidth);

    if (compareInput(word2, input)) {
        context1.fillStyle = highlightColor;
        context1.fillText(input, wordBoxWidth + padding + 10, word2Y, wordBoxWidth);
    }

    context1.fillStyle = wordColorPlayer1;
    context1.fillText(word3, (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);

    if (compareInput(word3, input)) {
        context1.fillStyle = highlightColor;
        context1.fillText(input, (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);
    }

    context1.fillStyle = wordColorPlayer1;
    context1.fillText(word4, (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);

    if (compareInput(word4, input)) {
        context1.fillStyle = highlightColor;
        context1.fillText(input, (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);
    }

    context1.fillStyle = wordColorPlayer1;
    context1.fillText(word5, (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);

    if (compareInput(word5, input)) {
        context1.fillStyle = highlightColor;
        context1.fillText(input, (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);
    }
}

// Draws the current words from Player 2 on the Player 2 side Canvas element
function drawPlayer2Canvas(word1, word2, word3, word4, word5) {

    context2.clearRect(0, 0, canvas2.width, canvas2.height);

    context2.font = "30px Arial";

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word1, padding + 5, player2Word1Y, wordBoxWidth);

    if (compareInput(word1, player2CurrentInput)) {
        context2.fillStyle = highlightColor;
        context2.fillText(player2CurrentInput, padding + 5, player2Word1Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word2, wordBoxWidth + padding + 10, player2Word2Y, wordBoxWidth);

    if (compareInput(word2, player2CurrentInput)) {
        context2.fillStyle = highlightColor;
        context2.fillText(player2CurrentInput, wordBoxWidth + padding + 10, player2Word2Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word3, (wordBoxWidth * 2) + padding + 15, player2Word3Y, wordBoxWidth);

    if (compareInput(word3, player2CurrentInput)) {
        context2.fillStyle = highlightColor;
        context2.fillText(player2CurrentInput, (wordBoxWidth * 2) + padding + 15, player2Word3Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word4, (wordBoxWidth * 3) + padding + 20, player2Word4Y, wordBoxWidth);

    if (compareInput(word4, player2CurrentInput)) {
        context2.fillStyle = highlightColor;
        context2.fillText(player2CurrentInput, (wordBoxWidth * 3) + padding + 20, player2Word4Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word5, (wordBoxWidth * 4) + padding + 25, player2Word5Y, wordBoxWidth);

    if (compareInput(word5, player2CurrentInput)) {
        context2.fillStyle = highlightColor;
        context2.fillText(player2CurrentInput, (wordBoxWidth * 4) + padding + 25, player2Word5Y, wordBoxWidth);
    }
}

// Game loop for executing the animation of elements (words) on the HTML Canvas
function gameLoop() {
    // Update game objects in the loop
    updatePlayer1PositionsWithSpeeds();
    drawPlayer1Canvas();

    // *We pass values in because these are going to be changing based on the received GameState variables from Player 2
    updatePlayer3PositionsWithSpeeds(player2Speed1, player2Speed2, player2Speed3, player2Speed4, player2Speed5);
    drawPlayer2Canvas(player2Word1, player2Word2, player2Word3, player2Word4, player2Word5);

    if ((word1Y <= canvas1.width) && (word2Y <= canvas1.width) && (word3Y <= canvas1.width) && (word4Y <= canvas1.width) && (word5Y <= canvas1.width)) {
        window.requestAnimationFrame(gameLoop);
    } else {
        stopClock();
        //document.getElementById('player1input').dissabled;
    }
}

function updatePlayer1PositionsWithSpeeds() {
    word1Y += word1Speed;
    word2Y += word2Speed;
    word3Y += word3Speed;
    word4Y += word4Speed;
    word5Y += word5Speed;
}

function updatePlayer3PositionsWithSpeeds(speed1, speed2, speed3, speed4, speed5) {

    player2Word1Y += speed1;
    player2Word2Y += speed2;
    player2Word3Y += speed3;
    player2Word4Y += speed4;
    player2Word5Y += speed5;
}

/* Compares the current Input from Player 1 and checks if it matches 
    a currently displayed word or words and returns true or false 
    based upon the result */
function compareInput(word, input) {
    var wordChars = word.split('');
    var inputChars = input.split('');

    var matches = true;
    for (i = 0; i < inputChars.length; i++) {
        if (wordChars[i] !== inputChars[i]) {
            matches = false;
            break;
        }
    }

    return matches;
}

// HELPER FUNCTION:
// - RETURN: a random value between 0.2 and 0.9 that determines the speed of a specific word
function getRandomValue() {
    return (Math.random() * (0.9 - 0.2) + 0.2)
}

// HELPER FUNCTION:
// - RETURN: the next word from the words list for the current player
function getNextWord() {
    var nextword
    nextword = words[wordIndex]
    wordIndex += 1
    return nextword
}

// This function is called when the GameState is received from Player 2
// It updates the Player 2 GameState variables for Player 1 to see
var updatePlayer2Canvas = function(obj) {

    document.getElementById("player2Score").innerHTML = obj.score;
    document.getElementById("player2Input").value = obj.currentInput;
    document.getElementById("otherPlayerName").innerHTML = obj.name;

    player2CurrentInput = obj.currentInput;

    player2Speed1 = obj.wordSpeeds["word1Speed"];
    player2Speed2 = obj.wordSpeeds["word2Speed"];
    player2Speed3 = obj.wordSpeeds["word3Speed"];
    player2Speed4 = obj.wordSpeeds["word4Speed"];
    player2Speed5 = obj.wordSpeeds["word5Speed"];

    player2Word1Y = obj.positions["word1Y"];
    player2Word2Y = obj.positions["word2Y"];
    player2Word3Y = obj.positions["word3Y"];
    player2Word4Y = obj.positions["word4Y"];
    player2Word5Y = obj.positions["word5Y"];

    player2Word1 = obj.currentWordList[0];
    player2Word2 = obj.currentWordList[1];
    player2Word3 = obj.currentWordList[2];
    player2Word4 = obj.currentWordList[3];
    player2Word5 = obj.currentWordList[4];

    // DEBUG
    var str = JSON.stringify(obj, null, 2);
    console.log(str);
}

init();