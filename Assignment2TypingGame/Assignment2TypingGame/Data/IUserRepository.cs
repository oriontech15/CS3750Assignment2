
using Assignment2TypingGame.Pages.User;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment2TypingGame.Data
{
    public interface IUserRepository : IRepository<User>
    {
        

        void Update(User user);
    }
}
