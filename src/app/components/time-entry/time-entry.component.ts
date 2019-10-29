import { Component, OnInit } from '@angular/core';

import { StringUtil } from '../../util/string-util';
import { DateUtil } from '../../util/date-util';
import { HeaderTextService } from '../../services/header-text.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TimeEntryService } from 'src/app/services/time-entry.service';
import { Option } from '../../util/option';
import { JobTime } from '../../entities/job-time';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: [
    '../../app.component.css',
    './time-entry.component.css'
  ]
})
export class TimeEntryComponent implements OnInit {

  private currentTime: Date = DateUtil.getDateRoundedToNearest5MinutesOf(new Date());

  constructor(
      private headerTextService: HeaderTextService,
      private authenticationService: AuthenticationService,
      private timeEntryService: TimeEntryService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Time Entry');
  }

  static readonly periodOptions: Option[] = [
    { key: 'AM', value: 'AM' },
    { key: 'PM', value: 'PM' }
  ];

  jobName: string;
  timeInHour: string = '07';
  timeInMinute: string = '30';
  timeInPeriod: string = 'AM';
  timeOutHour: string = StringUtil.getTwoLengthStringFromNumber(
                            DateUtil.get2Length12HourHoursFrom24HourHours(this.currentTime.getHours()));
  timeOutMinute: string = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getMinutes());
  timeOutPeriod: string = DateUtil.getPeriodStringFrom24HourHours(this.currentTime.getHours());

  month: string = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getMonth() + 1);
  day: string = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getDate());
  year: string = String(this.currentTime.getFullYear());

  hourOptions: Option[] = StringUtil.getTwoLengthNumberStringOptions(1, 12, 1);
  minuteOptions: Option[] = StringUtil.getTwoLengthNumberStringOptions(0, 59, 5);
  periodOptions: Option[] = TimeEntryComponent.periodOptions;
  monthOptions: Option[] = StringUtil.getTwoLengthNumberStringOptions(1, 12, 1);
  dayOptions: Option[] =
      StringUtil.getTwoLengthNumberStringOptions(
                      1, DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)), 1);
  yearOptions: Option[] = StringUtil.getNumberStringOptions(2010, 2020, 1);

  comment: string;

  private resolveNumberOfDaysInMonth() {
    this.dayOptions =
        StringUtil.getTwoLengthNumberStringOptions(
            1, DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)), 1);
  }

  compareFn(c1: Option, c2: Option) : boolean {
    return (c1 && c2 ? c1.value === c2.value : c1 === c2);
  }

  onSubmit() {
    this.printFormValues();

    // let jobTime = this.getJobTimeFromFormValues();

    // console.log(jobTime);

    // this.timeEntryService.addJobTime(jobTime).subscribe(
    //   result => {
    //     console.log(result);
    //   },
    //   error => {
    //     console.log(error.message);
    //   },
    //   () => { console.log('onSubmit() request finished')}
    // );
  }

  private getJobTimeFromFormValues() : JobTime {

    let timeInDate = this.getTimeInDateFromFormValues();

    let timeOutDate = this.getTimeOutDateFromFormValues();

    return new JobTime(
      null,
      // TODO this requires getPrincipalInfo() to return an object (as in not be null)
      this.authenticationService.getPrincipalInfo().getName(),
      this.jobName,
      timeInDate,
      timeOutDate,
      this.comment);
  }

  private getTimeInDateFromFormValues() : Date {
    return new Date(
      +this.year,
      (+this.month - 1),
      +this.day,
      DateUtil.get24HourHoursFrom(+this.timeInHour, this.timeInPeriod),
      +this.timeInMinute);
  }

  private getTimeOutDateFromFormValues() : Date {
    return new Date(
      +this.year,
      (+this.month - 1),
      +this.day,
      DateUtil.get24HourHoursFrom(+this.timeOutHour, this.timeOutPeriod),
      +this.timeOutMinute);
  }

  private printFormValues() : void {
    console.log('Job Name:', this.jobName);
    console.log('timeInHour:', this.timeInHour);
    console.log('timeInMinute:', this.timeInMinute);
    console.log('timeInPeriod:', this.timeInPeriod);
    console.log('timeOutHour:', this.timeOutHour);
    console.log('timeOutMinute:', this.timeOutMinute);
    console.log('timeOutPeriod:', this.timeOutPeriod);
    console.log('month:', this.month);
    console.log('daysInMonth:',
                DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)));
    console.log('day:', this.day);
    console.log('year:', this.year);
    console.log('comment:', this.comment);
  }
}
