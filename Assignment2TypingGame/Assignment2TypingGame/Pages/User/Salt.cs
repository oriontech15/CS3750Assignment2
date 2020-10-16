using System;
using System.Security.Cryptography;

namespace Assignment2TypingGame.Pages.LogIn
{
    public class Salt
    {
        public string salt()
        {
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] buffer = new byte[1024];

            rng.GetBytes(buffer);
            string salt = BitConverter.ToString(buffer);
            return salt;
        }
    }
}
