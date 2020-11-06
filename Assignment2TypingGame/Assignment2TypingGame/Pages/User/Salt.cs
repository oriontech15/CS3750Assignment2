using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Razor.Language.Intermediate;
using System;
using System.Security.Cryptography;
using System.Text;

namespace Assignment2TypingGame.Pages.LogIn {
    public class Salt {
        public string salt() {
            RNGCryptoServiceProvider rng = new RNGCryptoServiceProvider();
            byte[] buffer = new byte[1024];

            rng.GetBytes(buffer);
            string salt = BitConverter.ToString(buffer);
            return salt;
        }

        public string ComputeSha256Hash(string usersalt, string userpassword) {
            string rawData = usersalt + userpassword;

            // Create a SHA256   
            using (SHA256 sha256Hash = SHA256.Create()) {

                // ComputeHash - returns byte array  
                byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(rawData));

                // Convert byte array to a string   
                StringBuilder builder = new StringBuilder();
                for (int i = 0; i < bytes.Length; i++) {
                    builder.Append(bytes[i].ToString("x2"));
                }

                return builder.ToString();
            }
        }
    }
}