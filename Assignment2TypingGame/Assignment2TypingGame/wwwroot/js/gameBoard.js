const words = <% this.#Assignment2TypingGame.Csharp.GetWords(1) %>

function JSgetWords() {
    return words;
}

function getNextWord() {
    return words[++words.current]
}