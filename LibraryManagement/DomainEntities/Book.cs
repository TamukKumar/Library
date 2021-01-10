using System;
using System.ComponentModel.DataAnnotations;

namespace DomainEntities
{
    public class Book
    {
        public int BookId { get; set; }

        [Required]
        public string BookName { get; set; }

        [Required]
        public string Author { get; set; }

        [Required]
        public bool Availability { get; set; }
    }
}
