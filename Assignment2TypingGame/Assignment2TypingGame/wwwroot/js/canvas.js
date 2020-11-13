var player1Word1Speed = getRandomValue();
var player1Word2Speed = getRandomValue();
var player1Word3Speed = getRandomValue();
var player1Word4Speed = getRandomValue();
var player1Word5Speed = getRandomValue();
 
var player2Word1Speed = getRandomValue();
var player2Word2Speed = getRandomValue();
var player2Word3Speed = getRandomValue();
var player2Word4Speed = getRandomValue();
var player2Word5Speed = getRandomValue();

var player1Word1Y = 0;
var player1Word2Y = 0;
var player1Word3Y = 0;
var player1Word4Y = 0;
var player1Word5Y = 0;

var player2Word1Y = 0;
var player2Word2Y = 0;
var player2Word3Y = 0;
var player2Word4Y = 0;
var player2Word5Y = 0;

var canvasPlayer1 = document.getElementById("canvasPlayer1");
var canvasPlayer2 = document.getElementById("canvasPlayer2");
let contextPlayer1 = canvasPlayer1.getContext("2d");
let contextPlayer2 = canvasPlayer2.getContext("2d");

let padding = 10;
let wordBoxWidth = (canvasPlayer1.width / 5) - (padding / 2 + 5)

function init() {

    gameLoop();
}

function draw() {
    contextPlayer1.clearRect(0, 0, canvasPlayer1.width, canvasPlayer1.height);
    contextPlayer2.clearRect(0, 0, canvasPlayer2.width, canvasPlayer2.height);

    contextPlayer1.fillStyle = '#ff8080';
    contextPlayer1.fillRect(padding + 5, player1Word1Y, wordBoxWidth, 25);

    contextPlayer1.fillStyle = '#ff8080';
    contextPlayer1.fillRect(wordBoxWidth + padding + 10, player1Word2Y, wordBoxWidth, 25);

    contextPlayer1.fillStyle = '#ff8080';
    contextPlayer1.fillRect((wordBoxWidth * 2) + padding + 15, player1Word3Y, wordBoxWidth, 25);

    contextPlayer1.fillStyle = '#ff8080';
    contextPlayer1.fillRect((wordBoxWidth * 3) + padding + 20, player1Word4Y, wordBoxWidth, 25);

    contextPlayer1.fillStyle = '#ff8080';
    contextPlayer1.fillRect((wordBoxWidth * 4) + padding + 25, player1Word5Y, wordBoxWidth, 25);

    contextPlayer2.fillStyle = '#ff8080';
    contextPlayer2.fillRect(padding + 5, player2Word1Y, wordBoxWidth, 25);

    contextPlayer2.fillStyle = '#ff8080';
    contextPlayer2.fillRect(wordBoxWidth + padding + 10, player2Word2Y, wordBoxWidth, 25);

    contextPlayer2.fillStyle = '#ff8080';
    contextPlayer2.fillRect((wordBoxWidth * 2) + padding + 15, player2Word3Y, wordBoxWidth, 25);

    contextPlayer2.fillStyle = '#ff8080';
    contextPlayer2.fillRect((wordBoxWidth * 3) + padding + 20, player2Word4Y, wordBoxWidth, 25);

    contextPlayer2.fillStyle = '#ff8080';
    contextPlayer2.fillRect((wordBoxWidth * 4) + padding + 25, player2Word5Y, wordBoxWidth, 25);
}

function gameLoop(timeStamp) {
    // Update game objects in the loop
    update();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function update() {
    console.log(player1Word1Y);
    console.log(player2Word1Y);


    player1Word1Y += player1Word1Speed;
    player1Word2Y += player1Word2Speed;
    player1Word3Y += player1Word3Speed;
    player1Word4Y += player1Word4Speed;
    player1Word5Y += player1Word5Speed;
 
    player2Word1Y += player2Word1Speed;
    player2Word2Y += player2Word2Speed;
    player2Word3Y += player2Word3Speed;
    player2Word4Y += player2Word4Speed;
    player2Word5Y += player2Word5Speed;
}

function getRandomValue() {
    return (Math.random() * (0.9 - 0.2) + 0.2)
}

init();