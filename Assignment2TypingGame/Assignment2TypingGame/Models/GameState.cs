using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Assignment2TypingGame.Models.GameState
{
    public class GameState
    {
        public string name {get; set;}
        public string currentInput {get; set;}
        public int score {get; set;}
        public List<string> currentWordList {get; set;}
        public Dictionary<string, double> positions {get; set;}
        public Dictionary<string, double> wordSpeeds {get; set;}
    }
}