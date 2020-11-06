using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using Assignment2TypingGame.Models.GameState;

namespace Assignment2TypingGame.Controllers
{
    public class GameStateController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult Get()
        //{
        //    JsonSerializer.Deserialize<GameState>(rawJSON)
        //    return JSON;
        //}

    }
}
