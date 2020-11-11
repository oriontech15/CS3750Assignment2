using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Assignment2TypingGame.Pages.User;
using System.Linq.Expressions;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public readonly ApplicationDbContext _db;
    public DbSet<Player> User { get; set; }


    //public UnitOfWork(ApplicationDbContext db)
    //{

    //    _db = db;
    //    User


    //}


    //public void Save()
    //{
        
    //    _db.SaveChanges();
    //}


    ////Get the first or default result
    //T GetFirstOrDefault(
    //    Expression<Func<T, bool>> filter = null,
    //    string includeProperties = null
    //);

}
