import { Component, OnInit } from '@angular/core';

import { JobTimeService } from '../../services/job-time.service';
import { HeaderTextService } from '../../services/header-text.service';
import { JobTime } from '../../entities/job-time';

@Component({
  selector: 'app-job-time-viewer',
  templateUrl: './job-time-viewer.component.html',
  styleUrls: ['./job-time-viewer.component.css']
})
export class JobTimeViewerComponent implements OnInit {

  private sampleData : string;

  private jobTimes : JobTime[];

  constructor(private jobTimeService: JobTimeService,
              private headerTextService: HeaderTextService) { }

  ngOnInit() {

    this.headerTextService.emitTitle('Job Time Viewer');

    this.sampleData = this.jobTimeService.getSampleData();

    this.jobTimes = JSON.parse(this.sampleData);
  }

}
