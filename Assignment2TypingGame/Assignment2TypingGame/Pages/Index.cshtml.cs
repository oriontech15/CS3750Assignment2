using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Assignment2TypingGame.Data;
using Assignment2TypingGame.Pages.LogIn;
using Assignment2TypingGame.Pages.User;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Logging;

namespace Assignment2TypingGame.Pages
{
    public class IndexModel : PageModel
    {
        private readonly IUnitOfWork _unitOfWork;

        public IndexModel(IUnitOfWork unitOfwork)
        {
            _unitOfWork = unitOfwork;
        }

        Salt salt = new Salt();

        [BindProperty]
        public Player Player { get; set; }

        public IActionResult OnGet(int? id)
        {

            //if (id != null)
            //{
            //    UserObj = _context.User.GetFirstOrDefault(u => u.Id == id);
            //    if (UserObj == null)
            //    {
            //        return NotFound();
            //    }
            //}

            return Page(); // refresh page call on Get again without id


        }

        public IActionResult OnPost()
        {

            //UserObj.Salt = salt.salt();

            //if (!ModelState.IsValid)
            //{
            //    return Page();
            //}

            //if (UserObj.Id == 0) // means a brand new category
            //{
            //    _unitOfWork.User.Add(UserObj);
            //}

            //else
            //{
            //    _unitOfWork.User.Update(UserObj);
            //}

            //_unitOfWork.Save();
            return RedirectToPage("./gameBoard");
        }
    }
}
