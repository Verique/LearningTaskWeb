using System.ComponentModel.DataAnnotations;

namespace LearningTask.Models
{
    public class User
    {
        public User(string username, string passwordHash)
        {
            Username = username;
            PasswordHash = passwordHash;
        }

        [Key]
        public string Username { get; set; }
        [Required]
        public string PasswordHash { get; set; }
    }
}