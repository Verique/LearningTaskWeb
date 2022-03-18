using System;
using System.Linq;
using System.Text.Json;
using LearningTask.Contexts;
using LearningTask.Models;
using Microsoft.AspNetCore.Authorization;
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

        [Authorize]
        [HttpGet("{id:long}")]
        public IActionResult ShowEmployeeForm(long id) => Json(ctx.Find<Employee>(id)); 
        
        [Authorize]
        [HttpDelete("{id:long}")]
        public IActionResult DeleteEmployee(long id)
        {
            var employee = ctx.Employees.Find(id);
            ctx.Employees.Remove(employee);
            ctx.SaveChanges();
            return Json($"Employee #{id} removed!");
        }
        
        [Authorize]
        [HttpPut("{id:long}")]
        public IActionResult ChangeEmployee(long id, [FromBody] Employee employee)
        {
            employee.Id = id;
            ctx.Employees.Update(employee);
            ctx.SaveChanges();
            return Json(employee);
        }

        [Authorize]
        [HttpPost("new")]
        public IActionResult AddEmployeeFromJson([FromBody] Employee employee)
        {
            employee.LastModifiedDate = DateTime.UtcNow;
            ctx.Employees.Add(employee);
            ctx.SaveChanges();
            return new CreatedResult("Employees", employee);
        }
        
        [Authorize]
        [HttpGet("all")]
        public IActionResult GetEmployees() => Json(ctx.Employees);

        [Authorize]
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
            var totalPages = ctx.Employees.Count() / PageSize + 1;

            return Json(new PagedEmployeesResponse(pagedEmployees, totalPages));
        }
    }
}