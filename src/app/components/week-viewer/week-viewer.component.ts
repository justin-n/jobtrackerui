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

  private readonly weekFormatString : string = 'yyyy-MM-dd';

  private sampleWeeks : Date[];

  constructor(private jobTimeService: JobTimeService,
              private headerTextService : HeaderTextService) { }

  ngOnInit() {

    this.headerTextService.emitTitle('Week Viewer');

    this.sampleWeeks = JSON.parse(this.jobTimeService.getSampleWeeks());
  }
}
