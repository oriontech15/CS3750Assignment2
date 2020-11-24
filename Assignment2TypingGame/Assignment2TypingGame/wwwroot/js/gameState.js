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
        //Checking to see if this message came from a different player
        //if (user != currentUser) {

        //changing from a JSON to a javascript object
        const obj = JSON.parse(gameState);
        updateCanvas(obj);

        document.getElementById("otherPlayerName").innerHTML = obj.name;
        document.getElementById("player2Score").innerHTML = obj.score;
        document.getElementById("player2Input").value = obj.currentInput;
    }

        //const obj = JSON.parse(gameState);
        //updateCanvas(obj);

        ////document.getElementById("otherPlayerName").value = obj.name;
        //document.getElementById("player2Score").value = obj.score;
        //document.getElementById("player2Input").value = obj.currentInput;
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
    //var user = "Player 1";

    //New object holding key value pairs
    var obj = new Object();
    obj["name"] = user;
    obj["currentInput"] = document.getElementById("player1Input").value;
    obj["currentWordList"] = currentWords;
    obj["score"] = document.getElementById("player1Score").value;

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

//// Execute a function when the user releases a key on the keyboard -- and send the message
//player2Input.addEventListener("keyup", (event) => {

//    // Number 13 is the "Enter" key on the keyboard

//    console.log(event.key);
//    console.log(event.code);

//    //Gathering the information to be sent
//    // var user = document.getElementById("playerName").value;
//    var user = "Player 2";
//    var obj = new Object();
//    obj["name"] = user;
//    obj["currentInput"] = document.getElementById("player2Input").value;
//    obj["currentWordList"] = words;
//    obj["score"] = document.getElementById("player2Score").value;
//    var json = JSON.stringify(obj);

//    //Client side sending the message/object to the server side
//    //SendGameState is the name of the function on the server side / in the c# file
//    connection.invoke("SendGameState", user, json).catch(function(err) {
//        return console.error(err.toString());
//    });

//    // player2Input.value = "";
//    event.preventDefault();
   
//});