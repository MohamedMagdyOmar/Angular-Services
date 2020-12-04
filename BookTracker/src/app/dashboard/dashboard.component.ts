import { Component, OnInit } from '@angular/core';

import { Book } from 'app/models/book';
import { Reader } from 'app/models/reader';
import {LoggerService} from '../Services/logger.service';
import {DataService} from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  allBooks: Book[] ;
  allReaders: Reader[];
  mostPopularBook: Book;

  constructor(private loggerService: LoggerService,
              private dataService: DataService) {
    this.loggerService.log('Creating DashBoard');
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.dataService.mostPopularBook;
  }

  ngOnInit() {
  }

  deleteBook(bookID: number): void {
    console.warn(`Delete book not yet implemented (bookID: ${bookID}).`);
  }

  deleteReader(readerID: number): void {
    console.warn(`Delete reader not yet implemented (readerID: ${readerID}).`);
  }

}
