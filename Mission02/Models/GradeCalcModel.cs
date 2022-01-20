using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
//This page provides the model for the Grade Calculator
namespace Mission02.Models
{   
    //This creates the Getter and Setter
    public class GradeCalcModel
    {
        [Required]
        [Range(0,100)]
        public string Assign { get; set; }
        [Required]
        [Range(0, 100)]
        public string Group { get; set; }
        [Required]
        [Range(0, 100)]
        public string Quiz { get; set; }
        [Required]
        [Range(0, 100)]
        public string Exam { get; set; }
        [Required]
        [Range(0, 100)]
        public string Intex { get; set; }

    }
}
