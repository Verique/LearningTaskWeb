using LearningTask.Entities;
using Microsoft.EntityFrameworkCore;

namespace LearningTask.Contexts
{
    public class PostgresContext : DbContext
    {
        public PostgresContext(DbContextOptions<PostgresContext> options)
            :base(options) { }
        
        public DbSet<Employee> Employees { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Employee>()
                .Property(b => b.LastModifiedDate)
                .HasDefaultValueSql("timezone('utc'::text, now())");
        }
    }
}