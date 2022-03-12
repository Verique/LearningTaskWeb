using System;
using System.Linq;
using LearningTask.Contexts;
using LearningTask.Models;
using Microsoft.AspNetCore.Mvc;

namespace LearningTask.Controllers
{
    [ApiController]
    [Route("employee")]
    public class EmployeeController : Controller
    {
        private const int PageSize = 10;
        private PostgresContext ctx;
        
        public EmployeeController(PostgresContext ctx)
        {
            this.ctx = ctx;
        }

        [HttpGet("{id:long}")]
        public IActionResult ShowEmployeeForm(long id) => Json(ctx.Find<Employee>(id)); 
        
        [HttpDelete("{id:long}")]
        public IActionResult DeleteEmployee(long id)
        {
            var employee = ctx.Employees.Find(id);
            ctx.Employees.Remove(employee);
            ctx.SaveChanges();
            return Json($"Employee #{id} removed!");
        }
        
        [HttpPut("{id:long}")]
        public IActionResult ChangeEmployee(long id, [FromBody] Employee employee)
        {
            employee.Id = id;
            ctx.Employees.Update(employee);
            ctx.SaveChanges();
            return Json(employee);
        }

        [HttpPost("new")]
        public IActionResult AddEmployeeFromJson([FromBody] Employee employee)
        {
            employee.LastModifiedDate = DateTime.UtcNow;
            ctx.Employees.Add(employee);
            ctx.SaveChanges();
            return new CreatedResult("Employees", employee);
        }
        
        [HttpGet("all")]
        public IActionResult GetEmployees() => Json(ctx.Employees);

        [HttpGet("page/{page:int}")]
        public IActionResult GetTenEmployees(int page, [FromQuery]string orderby, [FromQuery]bool descending)
        {
            Func<Employee, IComparable> orderFunc = orderby switch
            {
                "name" => o => o.Name,
                "email" => o => o.Email,
                "birthday" => o => o.Birthday,
                "salary" => o => o.Salary,
                "lastmoddate" => o=> o.LastModifiedDate,
                _ => o => o.Id
            };
            
            var ordered = descending ? 
                ctx.Employees.OrderByDescending(orderFunc) : 
                ctx.Employees.OrderBy(orderFunc);
            
            var pagedEmployees = ordered.Skip(PageSize * page).Take(PageSize).ToArray();

            return Json(pagedEmployees);
        }
    }
}