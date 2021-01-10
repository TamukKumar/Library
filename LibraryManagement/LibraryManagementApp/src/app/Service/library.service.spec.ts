import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

import { Book} from '../Model/Book';

import { of} from 'rxjs';

import { HttpErrorResponse} from '@angular/common/http';

describe('LibraryService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: LibraryService;
  const Stub = 

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new LibraryService(httpClientSpy as any);
  });

  it('should return expected books', () => {
    const expectedBooks: Book[] =
    [{ BookId: 1, BookName: 'Harry Porter', Author: 'JK', Availability: true },
    { BookId: 2, BookName: 'Positive Mind', Author: 'John', Availability: false }];

    httpClientSpy.get.and.returnValue(of(expectedBooks));

  service.GetBooks().subscribe(
    books => expect(books).toEqual(expectedBooks, 'expected books'),
    fail
  );
});

it('should return an error when the server returns a 404', () => {
  const errorResponse = new HttpErrorResponse({
    error: 'test 404 error',
    status: 404, statusText: 'Not Found'
  });

  httpClientSpy.get.and.returnValue(of(errorResponse));

  service.GetBooks().subscribe(
    books => fail('expected an error, not books'),
    error  => expect(error.message).toContain('test 404 error')
  );
});

});
