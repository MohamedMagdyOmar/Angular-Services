import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';
import {allBooks, allReaders} from '../data';
import {Reader} from '../models/reader';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  mostPopularBook: Book = allBooks[0];
  constructor(private loggerService: LoggerService, private http: HttpClient) { }

  getAllReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>('/api/readers');
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
