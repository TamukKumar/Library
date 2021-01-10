import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';


@NgModule({
  declarations: [BookListComponent],
  imports: [
    CommonModule,
    FormsModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
