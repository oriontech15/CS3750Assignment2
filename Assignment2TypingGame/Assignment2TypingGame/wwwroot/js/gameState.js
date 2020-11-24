"use strict";

//console.log(canvasScript.getNextWord());

//establishing the connection with the hub which is on the server side
var connection = new signalR.HubConnectionBuilder().withUrl("/GameStateHub").build();

//Disable send button until connection is established
document.getElementById("player1Input").disabled = true;
document.getElementById("player2Input").disabled = true;

//This function will execute when a message sent from the server is titled "ReceiveGameState"
connection.on("ReceiveGameState", function(user, gameState) {

    var currentUser = document.getElementById("playerName").value;

    if (user != currentUser) {

        const obj = JSON.parse(gameState);
        updatePlayer2Canvas(obj);

        // //document.getElementById("otherPlayerName").value = obj.name;
        // document.getElementById("player2Score").value = obj.score;
        // document.getElementById("player2Input").value = obj.currentInput;
    }
});

connection.start().then(function() {
    //enabling the "send button"
    document.getElementById("player1Input").disabled = false;
    document.getElementById("player2Input").disabled = false;
}).catch(function(err) {
    return console.error(err.toString());
});

var player1Input = document.getElementById("player1Input");
var player2Input = document.getElementById("player2Input");

// Execute a function when the user releases a key on the keyboard -- and send the message
player1Input.addEventListener("keyup", (event) => {
    // Number 13 is the "Enter" key on the keyboard

    console.log(event.key);
    console.log(event.code);

    var user = document.getElementById("playerName").value;

    //New object holding key value pairs
    var obj = new Object();
    obj["name"] = user;
    obj["currentInput"] = document.getElementById("player1Input").value;
    obj["currentWordList"] = currentWords;
    obj["score"] = parseInt(document.getElementById("player1Score").innerHTML);

    //Encoding all the data into a JSON object
    var json = JSON.stringify(obj);

    //Client side sending the message/object to the server side
    //SendGameState is the name of the function on the server side / in the c# file
    connection.invoke("SendGameState", user, json).catch(function(err) {
        return console.error(err.toString());
    });

    //player1Input.value = "";

    event.preventDefault();

});
