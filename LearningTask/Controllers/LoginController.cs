using LearningTask.Extensions;
using LearningTask.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace LearningTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private IConfiguration configuration;
        
        public LoginController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }
        
        [HttpPut]
        public IActionResult Login([FromBody] UserInfo info)
        {
            if (info.Username != "admin" || info.Password != "admin") return BadRequest("Wrong user/password");
            // for study purposes, simple check for admin-admin combination
            
            // TODO : its better to use dedicated user table, containing users & password hashes
         
            var token = configuration.GenerateJwtToken(info.Username);
            return Ok(token);
        }
    }
}