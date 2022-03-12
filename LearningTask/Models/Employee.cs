using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LearningTask.Models
{
    public class Employee
    {
        [Key]
        public long Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        
        [Required]
        [StringLength(150)]
        public string Email { get; set; }
       
        [Column(TypeName = "date")]
        public DateTime Birthday { get; set; }
        
        public int Salary { get; set; }
        
        [Column(TypeName = "date")]
        public DateTime LastModifiedDate { get; set; }
    }
}