import { Component, OnInit } from '@angular/core';
import { LibraryService} from '../../Service/library.service';
import { Book} from '../../Model/Book';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  private libraryService : LibraryService;
  public bookList: Book[];
  public Author:string = '';
  public BookName:string = '';

  constructor(libraryService: LibraryService) { 
    this.libraryService = libraryService;
  }

  ngOnInit(): void {
    this.GetBooks();
  }

  private GetBooks(){
    this.libraryService.GetBooks().subscribe(books => {
      this.bookList = books;
    });
  }

  public SearchBooks(){
    this.libraryService.SearchBooks(this.BookName, this.Author).subscribe(books => {
      this.bookList = books;
    })
  }

  public Clear(){
    this.Author= '';
    this.BookName = '';
    this.GetBooks();
  }

}
