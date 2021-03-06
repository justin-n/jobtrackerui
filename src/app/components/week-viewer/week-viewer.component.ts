import { Component, OnInit } from '@angular/core';

import { HeaderTextService } from '../../services/header-text.service';
import { JobTimeService } from '../../services/job-time.service';

@Component({
  selector: 'app-week-viewer',
  templateUrl: './week-viewer.component.html',
  styleUrls: [
    './week-viewer.component.css',
    '../../app.component.css'
  ]
})
export class WeekViewerComponent implements OnInit {

  private weeks : Date[] = [];

  private weeksLoaded : boolean = false;

  constructor(private jobTimeService: JobTimeService,
              private headerTextService : HeaderTextService) { }

  ngOnInit() {

    this.headerTextService.emitTitle('Week Viewer');

    // this.weeks = JSON.parse(this.jobTimeService.getSampleWeeks());

    this.jobTimeService.getAllWeeks().subscribe((data : any) => {

        data.forEach((dateNumber : number) => {
          this.weeks.push(new Date(dateNumber));
        });

        this.weeksLoaded = true;
    });
  }
}
