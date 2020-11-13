<script>

    function init() {

        gameLoop()
    }

let rectX = 0;
let rectY = 0;
var canvas = document.getElementById("canvasPlayer1");
var canvas = document.getElementById("canvasPlayer2");
let context = canvas.getContext("2d");

function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 50, 25);
}

function gameLoop(timeStamp) {
        // Update game objects in the loop
        update();
    draw();

    window.requestAnimationFrame(gameLoop);
}

function update() {
        rectY += 1;
}

init();
</script>