import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Reader } from 'app/models/reader';
import {DataService} from '../Services/data.service';
import { BadgeService } from '../Services/badge.service';

@Component({
  selector: 'app-edit-reader',
  templateUrl: './edit-reader.component.html',
  styles: [],
  providers: [BadgeService]
})
export class EditReaderComponent implements OnInit {

  selectedReader: Reader;
  currentBadge: string;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private badgeService: BadgeService) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    const readerID: number = parseInt(this.route.snapshot.params['id']);
    this.selectedReader = this.dataService.getReaderById(readerID);
    this.currentBadge = this.badgeService.getReaderBadge(this.selectedReader.totalMinutesRead);
  }

  saveChanges() {
    console.warn('Save reader not yet implemented.');
  }
}
