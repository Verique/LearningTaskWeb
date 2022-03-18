using System;
using LearningTask.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LearningTask.Contexts
{
    public class PostgresContext : DbContext
    {

        
        public PostgresContext(DbContextOptions<PostgresContext> options)
            :base(options) { }
        
        public DbSet<Employee> Employees { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var dateTimeConverter = new ValueConverter<DateTime, DateTime>(
            v => v,
            v => DateTime.SpecifyKind(v, DateTimeKind.Utc)); 
            
            modelBuilder.Entity<Employee>()
                .Property(b => b.LastModifiedDate)
                .HasDefaultValueSql("timezone('utc'::text, now())")
                .HasConversion(dateTimeConverter);
            modelBuilder.Entity<Employee>()
                .Property(b => b.Birthday)
                .HasConversion(dateTimeConverter);
        }
    }
}