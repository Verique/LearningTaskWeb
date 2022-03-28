using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using LearningTask.Contexts;
using LearningTask.Extensions;
using LearningTask.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace LearningTask.Controllers
{
    [ApiController]
    [Route("login")]
    public class LoginController : Controller
    {
        private readonly IConfiguration configuration;
        private readonly MsSqlContext postgresContext;
        
        public LoginController(IConfiguration configuration, MsSqlContext msSqlContext)
        {
            this.configuration = configuration;
            this.postgresContext = msSqlContext;
        }
        
        [HttpPut]
        public IActionResult Authenticate([FromBody] UserCredentials userCredentials)
        {
            var passwordHash = ComputePasswordHashBase64(userCredentials.Password);
            var user = postgresContext.Users.FirstOrDefault(
                user => user.Username == userCredentials.Username &&
                        user.PasswordHash == passwordHash);
            
            if (user == null) return BadRequest("Wrong user/password");
            
            var token = configuration.GenerateJwtToken(userCredentials.Username);
            return Ok(token);
        }

        [HttpPost]
        public IActionResult Register([FromBody] UserCredentials userCredentials)
        {
            if (postgresContext.Users.FirstOrDefault(user => user.Username == userCredentials.Username) is not null)
            {
                return BadRequest("This username is taken");
            }
            
            postgresContext.Users.Add(new User(userCredentials.Username, ComputePasswordHashBase64(userCredentials.Password)));
            postgresContext.SaveChanges();
            return Ok(configuration.GenerateJwtToken(userCredentials.Username));
        }

        [HttpGet("users")]
        public IActionResult GetUsers() => Json(postgresContext.Users);

        private static string ComputePasswordHashBase64(string password)
        {
            var sha256 = new SHA256CryptoServiceProvider();
            var hash = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));

            return Convert.ToBase64String(hash);
        }
    }
}