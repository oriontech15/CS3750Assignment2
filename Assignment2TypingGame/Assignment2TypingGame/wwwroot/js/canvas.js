var word1Speed = getRandomValue();
var word2Speed = getRandomValue();
var word3Speed = getRandomValue();
var word4Speed = getRandomValue();
var word5Speed = getRandomValue();

var word1Y = 0;
var word2Y = 0;
var word3Y = 0;
var word4Y = 0;
var word5Y = 0;

var canvasPlayer1 = document.getElementById("canvasPlayer1");
var canvasPlayer2 = document.getElementById("canvasPlayer2");
let contextPlayer1 = canvasPlayer1.getContext("2d");
let contextPlayer2 = canvasPlayer2.getContext("2d");

let padding = 10;
let wordBoxWidth = (canvasPlayer1.width / 5) - (padding / 2 + 5);
let wordBoxHeight = wordBoxWidth / 3;

let player1TextColor = '#009844';
let player2TextColor = '#AAAAAA';

function init() {

    gameLoop();
}

function draw() {
    contextPlayer1.clearRect(0, 0, canvasPlayer1.width, canvasPlayer1.height);
    contextPlayer2.clearRect(0, 0, canvasPlayer2.width, canvasPlayer2.height);

    contextPlayer1.font = "30px Arial";
    contextPlayer2.font = "30px Arial";

    contextPlayer1.fillStyle = player1TextColor;
    contextPlayer1.fillText("Word 1", padding + 5, word1Y, wordBoxWidth);

    contextPlayer1.fillStyle = player1TextColor;
    contextPlayer1.fillText("Word 2", wordBoxWidth + padding + 10, word2Y, wordBoxWidth);

    contextPlayer1.fillStyle = player1TextColor;
    contextPlayer1.fillText("Word 3", (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);

    contextPlayer1.fillStyle = player1TextColor;
    contextPlayer1.fillText("Word 4", (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);

    contextPlayer1.fillStyle = player1TextColor;
    contextPlayer1.fillText("Word 5", (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);

    contextPlayer2.fillStyle = player2TextColor;
    contextPlayer2.fillText("Word 1", padding + 5, word1Y, wordBoxWidth);

    contextPlayer2.fillStyle = player2TextColor;
    contextPlayer2.fillText("Word 2", wordBoxWidth + padding + 10, word2Y, wordBoxWidth);

    contextPlayer2.fillStyle = player2TextColor;
    contextPlayer2.fillText("Word 3", (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);

    contextPlayer2.fillStyle = player2TextColor;
    contextPlayer2.fillText("Word 4", (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);

    contextPlayer2.fillStyle = player2TextColor;
    contextPlayer2.fillText("Word 5", (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);
}

function gameLoop(timeStamp) {
    // Update game objects in the loop
    update();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    console.log(word1Y);

    word1Y += word1Speed;
    word2Y += word2Speed;
    word3Y += word3Speed;
    word4Y += word4Speed;
    word5Y += word5Speed;
}

function getRandomValue() {
    return (Math.random() * (0.9 - 0.2) + 0.2)
}

init();