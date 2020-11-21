"use strict";

//console.log(canvasScript.getNextWord());

var connection = new signalR.HubConnectionBuilder().withUrl("/GameStateHub").build();

//Disable send button until connection is established
document.getElementById("player1Input").disabled = true;
document.getElementById("player2Input").disabled = true;

connection.on("ReceiveGameState", function(user, gameState) {

    if (user == "Player 1") {
        const obj = JSON.parse(gameState);
        var encodedMsg = obj.name + "---->" + obj.currentInput;

        var li = document.createElement("li");
        li.textContent = encodedMsg;

        updateCanvas(obj);
    } else {
        const obj = JSON.parse(gameState);
        var encodedMsg = obj.name + "---->" + obj.currentInput;

        updateCanvas(obj);
    }
});

connection.start().then(function() {
    document.getElementById("player1Input").disabled = false;
    document.getElementById("player2Input").disabled = false;
}).catch(function(err) {
    return console.error(err.toString());
});

var player1Input = document.getElementById("player1Input");
var player2Input = document.getElementById("player2Input");

// Execute a function when the user releases a key on the keyboard
player1Input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(event.key);
    console.log(event.code);
    if (event.code === "Enter") {

        var user = "Player 1";
        var obj = new Object();
        obj["name"] = user;
        obj["currentInput"] = document.getElementById("player1Input").value;
        obj["currentWordList"] = words;
        obj["score"] = 0;

        var json = JSON.stringify(obj);

        connection.invoke("SendGameState", user, json).catch(function(err) {
            return console.error(err.toString());
        });

        player1Input.value = "";

        event.preventDefault();
    }
});

// Execute a function when the user releases a key on the keyboard
player2Input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.code === "Enter") {

        var user = "Player 2";
        var obj = new Object();
        obj["name"] = user;
        obj["currentInput"] = document.getElementById("player2Input").value;
        var json = JSON.stringify(obj);

        connection.invoke("SendGameState", user, json).catch(function(err) {
            return console.error(err.toString());
        });

        player2Input.value = "";
        event.preventDefault();
    }
});