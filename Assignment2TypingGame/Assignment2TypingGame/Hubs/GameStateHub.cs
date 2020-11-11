using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;
using System;
using System.Text.Json;
using Assignment2TypingGame.Models.GameState;

namespace SignalRChat.Hubs
{
    public class GameStateHub : Hub
    {
        public async Task SendGameState(string user, string gameState)
        {
            GameState gameStateObj = JsonSerializer.Deserialize<GameState>(gameState);
            gameStateObj.name = gameStateObj.name.ToUpper();
            string serializedGameState = JsonSerializer.Serialize(gameStateObj);
            await Clients.All.SendAsync("ReceiveGameState", user, serializedGameState);
        }
    }
}