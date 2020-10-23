using System;
using System.Collections.Generic;
using System.Security.Authentication.ExtendedProtection;
using System.Security.Cryptography;

namespace Assignment2TypingGame.Pages.GameBoard
{
    public static class Words
    {

        public static List<string> EasyWords = new List<string>() { "word", "the", "be", "to", "of", "and", "in", "that", "have", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us" };
        public static List<string> HardWords = new List<string>() { "aberration", "abhor", "acquiesce", "alacrity", "amiable", "appease", "arcane", "avarice", "brazen", "brusque", "cajole", "callous", "candor", "chide", "circumspect", "coerce", "coherent", "complacency", "confidant", "connive", "cumulative", "debase", "decry", "deferential", "demure", "deride", "despot", "diligent", "elated", "eloquent", "embezzle", "empathy", "enmity", "erudite", "extol", "fabricate", "flabbergasted", "forsake", "furtive", "gluttony", "gratuitous", "haughty", "hypocrisy", "impeccable", "impertinent", "impudent", "indolent", "inept", "infamy", "inhibit", "innate", "insatiable", "insular", "intrepid" };

        /// <summary>
        /// Shuffles a list passed into it.
        /// </summary>
        public static void Shuffle<T>(this IList<T> list)
        {
            Random rng = new Random();
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = rng.Next(n + 1);
                T value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }

        /// <summary>
        /// Pass in a Difficulty 1 or 2 and get a randomized list of words back
        /// </summary>
        /// <param name="difficulty">1 reterns easy words. 2 returns hard words</param>
        public static List<string> GetWords(int difficulty)
        {
            List<string> words;
            if (difficulty == 1)
                words = EasyWords;
            if (difficulty == 2)
                words = HardWords;
            else
                words = EasyWords;

            words.Shuffle();
            return words;
        }
    }
}


