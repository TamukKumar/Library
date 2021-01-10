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
  public isIndia: boolean;

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

  public getGeolocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(x => {
         if(x.coords.latitude < 8 || x.coords.latitude > 37) {
           this.isIndia =  false;
         }
 
         if(x.coords.longitude < 68 || x.coords.longitude > 97){
           this.isIndia = false;
         }
 
         this.isIndia = true;
       });
     }
     else{
      this.isIndia = false;
     }
  }
}
