using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment.Models
{
    public class GradeCalculatorModel
    {
        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Grade must be between 0 and 100")]
        public double Assignments { get; set; }

        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Grade must be between 0 and 100")]
        public double GroupProject { get; set; }

        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Grade must be between 0 and 100")]
        public double Quizzes { get; set; }

        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Grade must be between 0 and 100")]
        public double Exams { get; set; }

        [Required]
        [Range(0.0, 100.0, ErrorMessage = "Grade must be between 0 and 100")]
        public double Intex { get; set; }

    }
}
