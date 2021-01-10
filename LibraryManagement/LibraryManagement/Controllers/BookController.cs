using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DomainEntities;
using ServiceProvider;
using System.Web.Http.Cors;

namespace LibraryManagement.Controllers
{
    [EnableCors(origins:"*", headers:"*", methods:"*")]
    public class BookController : ApiController
    {
        private BookService _service;

        public BookController()
        {
            _service = new BookService();
        }

        public List<Book> Get(string bookName="", string author="")
        {
            return _service.GetBooks(bookName, author);
        }
    }
}
