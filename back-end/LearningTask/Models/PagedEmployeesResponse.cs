namespace LearningTask.Models
{
    public class PagedEmployeesResponse
    {
        public PagedEmployeesResponse(Employee[] employees, int pageCount)
        {
            Employees = employees;
            PageCount = pageCount;
        }

        public Employee[] Employees { get; set; }
        public int PageCount { get; set; }
    }
}