
using Assignment2TypingGame.Pages.User;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assignment2TypingGame.Data
{
    public class UserRepository : Repository<Player>, IUserRepository
    {

        private readonly ApplicationDbContext _db;

        public UserRepository(ApplicationDbContext  db) : base(db)
        {
            _db = db;
        }

        public void Update(Player user)
        {
            throw new NotImplementedException();
        }

        //public IEnumerable<SelectListItem> GetCategoryListForDropDown()
        //{
        //    return _db.User.Select(i => new SelectListItem()
        //    {
        //        Text = i.Name,
        //        Value = i.Id.ToString()
        //    });
        //}

        //public void Update(Category category)
        //{
        //    var objFromDb = _db.Category.FirstOrDefault(s => s.Id == category.Id);

        //    objFromDb.Name = category.Name;
        //    objFromDb.DisplayOrder = category.DisplayOrder;

        //    _db.SaveChanges();
        //}
    }
}
