import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AddBookComponent } from './add-book/add-book.component';
import { AddReaderComponent } from './add-reader/add-reader.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { EditReaderComponent } from './edit-reader/edit-reader.component';
import {LoggerService} from './Services/logger.service';
import { PlainLoggerService } from './Services/plain-logger.service';
import { DataService } from './Services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddBookComponent,
    EditReaderComponent,
    EditBookComponent,
    AddReaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    // any component that request LoggerService in their constructor, they will get an instance of PlainLoggerService, as both of them has same interface
    // this is just different way of creating a service, the instructor just show unneeded funtionality for you :), at least now
    { provide: LoggerService, useClass: PlainLoggerService },
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
