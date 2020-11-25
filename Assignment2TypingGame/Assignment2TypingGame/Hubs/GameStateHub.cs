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
            //DEBUG
            //Console.WriteLine(gameState);
            GameState gameStateObj = JsonSerializer.Deserialize<GameState>(gameState);
            string serializedGameState = JsonSerializer.Serialize(gameStateObj);
            
            //This function when called will send the message received out to everybody. The message is titled "ReceiveGameState"
            await Clients.All.SendAsync("ReceiveGameState", user, serializedGameState);
        }
    }
}