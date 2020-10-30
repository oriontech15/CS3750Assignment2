
using System;
using System.Collections.Generic;
using System.Text;

namespace Assignment2TypingGame.Data
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository User { get; }
        void Save();
    }
}
