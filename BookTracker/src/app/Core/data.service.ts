import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {allBooks, allReaders} from '../data';
import {Reader} from '../models/reader';
import { Book } from '../models/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BookTrackerError } from '../models/bookTrackerError';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mostPopularBook: Book = allBooks[0];
  constructor(private loggerService: LoggerService, private http: HttpClient) { }

  getAllReaders(): Observable<Reader[] | BookTrackerError> {
    return this.http.get<Reader[]>('/api/readers').
      pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<BookTrackerError> {
    let dataError = new BookTrackerError();
    dataError.errorNumber = 100;
    dataError.message = error.statusText;
    dataError.friendlyMessage = 'An error occured during retrieving data';

    return throwError(dataError)
  }

  getReaderById(id: number): Reader {
    return  allReaders.find(reader => reader.readerID === id)
  }

  getAllBooks(): Book[] {
    return allBooks;
  }
  getBookById(id: number): Book {
    return  allBooks.find(book => book.bookID === id);
  }
  setMostPopularBook(popularBook: Book): void {
    this.mostPopularBook = popularBook;
  }
}
