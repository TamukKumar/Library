import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent} from './book-list/book-list.component';
import { LibraryGuard} from '../Guards/library.guard';

const routes: Routes = [
  {path:'booklist', canActivate:[LibraryGuard], component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
