using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment2TypingGame.Pages.GameBoard;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Text.Json;
using Assignment2TypingGame.Models;
using Assignment2TypingGame.Pages.User;

namespace Assignment2TypingGame.Pages
{
    public class gameBoardModel : PageModel
    {

        [BindProperty]
        public Player Player { get; set; }

        public void OnGet()
        {
            //TODO make a json object here
            List<string> mywords = Words.GetWords(1);

            var json = JsonSerializer.Serialize(mywords);

        }
    }
}
