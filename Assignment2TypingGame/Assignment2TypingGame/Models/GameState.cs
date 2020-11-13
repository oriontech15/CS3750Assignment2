using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Assignment2TypingGame.Models.GameState
{
    public class GameState
    {
        public string name {get; set;}
        public string currentInput {get; set;}
        public int score {get; set;}

        // Word Lists
        public List<string> wordList {get; set;}
        public List<string> currentWordList {get; set;}
        public List<string> completedWordList {get; set;}

        public List<Dictionary<string, string>> positions {get; set;}

        public GameState()
        {
            // var gameState = new JavaScriptSerializer().Deserialize<GameState>(json);
            // gameState.name // == json["name"]
        }

        //public IActionResult Get() {

        //    return JSON (new JavaScriptSerializer().Deserialize<GameState>(rawJSON););
        //}
    }
}