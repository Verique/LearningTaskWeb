using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using LearningTask.Contexts;
using LearningTask.Entities;
using Microsoft.AspNetCore.Mvc;

namespace LearningTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeTableController : Controller
    {
        private PostgresContext ctx;
        
        public EmployeeTableController(PostgresContext ctx)
        {
            this.ctx = ctx;
        }
        
        [HttpGet]
        public string GetEmployees()
        {
            var sb = new StringBuilder();
            foreach (var employee in ctx.Employees)
            {
                sb.Append($"{employee.Id} - " +
                          $"{employee.Name} - " +
                          $"{employee.Email} - " +
                          $"{employee.Salary} - " +
                          $"{employee.Birthday.ToShortDateString()} - " +
                          $"{employee.LastModifiedDate.ToShortDateString()}\n");
            }

            return sb.ToString();
        }

        [HttpPost]
        public IActionResult AddEmployeeFromJson([FromBody] Employee employee)
        {
            employee.LastModifiedDate = DateTime.UtcNow;
            ctx.Employees.Add(employee);
            ctx.SaveChanges();
            return Json("Success!");
        }
    }
};