import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Book} from '../Model/Book';
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private http: HttpClient;
  private serviceBasePath: string;

  constructor(http: HttpClient) {
    this.http = http;
    this.serviceBasePath = environment.URL;
   }


  public GetBooks(){
    return this.http.get<Book[]>(this.serviceBasePath + 'Book');
  }

  public SearchBooks(bookName: string, author: string){
    return this.http.get<Book[]>(this.serviceBasePath + 'Book?bookName=' + bookName + '&author=' + author);
  }
}
