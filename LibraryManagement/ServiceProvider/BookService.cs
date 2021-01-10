using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DomainEntities;
using DataTransfer;
using DataTransfer.DataContext;
using System.Data.Entity;

namespace ServiceProvider
{
    public class BookService
    {
        private LibraryModel _context { get; set; }

        public BookService()
        {
            _context = new LibraryModel();
            AddBooks();
        }


        public List<Book> GetBooks(string bookName="", string author="")
        {
            if(!String.IsNullOrEmpty(bookName) && !String.IsNullOrEmpty(author))
            {
                return _context.Books.Where(x => x.BookName.Contains(bookName) && x.Author.Contains(author)).ToList();
            }
            else if (!String.IsNullOrEmpty(bookName))
            {
                return _context.Books.Where(x => x.BookName.Contains(bookName)).ToList();
            }
            else if (!String.IsNullOrEmpty(author))
            {
                return _context.Books.Where(x => x.Author.Contains(author)).ToList();
            }
            else
            {
                return _context.Books.ToList();
            }
        }



        public void AddBooks()
        {
            var booksCount = _context.Books.Count();

            if(booksCount == 0)
            {
                List<Book> books = new List<Book>();

                books.Add(new Book() { BookName = "Harry Porter", Author = "JK", Availability = true });
                books.Add(new Book() { BookName = "Business Strategy", Author = "John", Availability = false });
                books.Add(new Book() { BookName = "Positive Thinking", Author = "PT", Availability = true });
                books.Add(new Book() { BookName = "Java", Author = "David", Availability = false });

                _context.Books.AddRange(books);
                _context.SaveChanges();
            }
        }
    }
}
