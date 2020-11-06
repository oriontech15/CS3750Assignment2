namespace Assignment2TypingGame.Models.GameState
{
    public class GameState
    {
        private string name {get; set;};
        private int score {get; set;};

        // Word Lists
        private List<string> wordList {get; set;};
        private List<string> currentWordList {get; set;};
        private List<string> completedWordList {get; set;};

        private List<Dictionary<string, string>> positions {get; set;};

        public GameState()
        {
            // var gameState = new JavaScriptSerializer().Deserialize<GameState>(json);
            // gameState.name // == json["name"]
        }

        public IActionResult Get() {

            return JSON (new JavaScriptSerializer().Deserialize<GameState>(rawJSON););
        }
    }
}