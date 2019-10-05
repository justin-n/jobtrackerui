import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { JobTimeService } from '../../services/job-time.service';
import { HeaderTextService } from '../../services/header-text.service';
import { JobTime } from '../../entities/job-time';
import { DateUtil } from '../../util/date-util';

@Component({
  selector: 'app-job-time-viewer',
  templateUrl: './job-time-viewer.component.html',
  styleUrls: [
    './job-time-viewer.component.css',
    '../../app.component.css'
  ]
})
export class JobTimeViewerComponent implements OnInit {

  private currentWeek : string;

  private jobTimes : JobTime[] = [];

  private uniqueDays : Date[];

  constructor(private route: ActivatedRoute,
              private jobTimeService: JobTimeService,
              private headerTextService: HeaderTextService) { }

  ngOnInit() : void {

    this.jobTimeService.getSampleData().subscribe((data : any) => {

    // this.jobTimeService.getAllJobTimes().subscribe((data : any) => {

      JSON.parse(data).forEach((jsonObject : any) => {

      // data.forEach((jsonObject : any) => {

        this.jobTimes.push(new JobTime(+jsonObject.id,
                                       jsonObject.user,
                                       jsonObject.jobName,
                                       new Date(jsonObject.timeIn),
                                       new Date(jsonObject.timeOut),
                                       jsonObject.comment))
      });

      this.jobTimes.sort(DateUtil.jobTimeTimeInComparator);

      this.uniqueDays = DateUtil.getUniqueDatesFromJobTimes(this.jobTimes);
    });

    this.currentWeek = this.route.snapshot.paramMap.get('week');

    this.headerTextService.emitTitle('Week of ' + this.currentWeek);
  }

  private getJobTimesByDay(day : Date) : JobTime[] {

    return this.jobTimes.filter(jt => DateUtil.dateIsWithinDayOf(day, jt.getTimeIn()));
  }
}
