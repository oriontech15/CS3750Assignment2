var word1Speed = getRandomValue();
var word2Speed = getRandomValue();
var word3Speed = getRandomValue();
var word4Speed = getRandomValue();
var word5Speed = getRandomValue();

var word1 = "backyard"
var word2 = "backwards"
var word3 = "backup"
var word4 = "back"
var word5 = "backpack"

var input = "bac"

var word1Y = 0;
var word2Y = 0;
var word3Y = 0;
var word4Y = 0;
var word5Y = 0;

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

function init() {

    gameLoop();
}

function drawPlayer1Canvas() {
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

function drawPlayer2Canvas() {
    context2.clearRect(0, 0, canvas2.width, canvas2.height);

    context2.font = "30px Arial";

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word1, padding + 5, word1Y, wordBoxWidth);

    if (compareInput(word1, input)) {
        context2.fillStyle = highlightColor;
        context2.fillText(input, padding + 5, word1Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word2, wordBoxWidth + padding + 10, word2Y, wordBoxWidth);

    if (compareInput(word2, input)) {
        context2.fillStyle = highlightColor;
        context2.fillText(input, wordBoxWidth + padding + 10, word2Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word3, (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);

    if (compareInput(word3, input)) {
        context2.fillStyle = highlightColor;
        context2.fillText(input, (wordBoxWidth * 2) + padding + 15, word3Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word4, (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);

    if (compareInput(word4, input)) {
        context2.fillStyle = highlightColor;
        context2.fillText(input, (wordBoxWidth * 3) + padding + 20, word4Y, wordBoxWidth);
    }

    context2.fillStyle = wordColorPlayer2;
    context2.fillText(word5, (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);

    if (compareInput(word5, input)) {
        context2.fillStyle = highlightColor;
        context2.fillText(input, (wordBoxWidth * 4) + padding + 25, word5Y, wordBoxWidth);
    }
}

function gameLoop(timeStamp) {
    // Update game objects in the loop
    update();
    drawPlayer1Canvas();
    drawPlayer2Canvas();

    if ((word1Y <= canvas1.width) && (word2Y <= canvas1.width) && (word3Y <= canvas1.width) && (word4Y <= canvas1.width) && (word5Y <= canvas1.width)) {
        window.requestAnimationFrame(gameLoop);
    }
}

function update() {
    word1Y += word1Speed;
    word2Y += word2Speed;
    word3Y += word3Speed;
    word4Y += word4Speed;
    word5Y += word5Speed;
}

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

function getRandomValue() {
    return (Math.random() * (0.9 - 0.2) + 0.2)
}

init();