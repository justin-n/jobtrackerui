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

  static readonly periodOptions: Option[] = [
    { key: 'AM', value: 'AM' },
    { key: 'PM', value: 'PM' }
  ];

  private currentTime: Date = DateUtil.getDateRoundedToNearest5MinutesOf(new Date());

  private errorDismissed : boolean = true;

  private errorMessage : string;

  private jobName: string;
  private timeInHour: string;
  private timeInMinute: string;
  private timeInPeriod: string;
  private timeOutHour: string;
  private timeOutMinute: string;
  private timeOutPeriod: string;

  private month: string;
  private day: string;
  private year: string;

  private hourOptions: Option[];
  private minuteOptions: Option[];
  private periodOptions: Option[];
  private monthOptions: Option[];
  private dayOptions: Option[];
  private yearOptions: Option[];

  private comment: string;

  constructor(
    private headerTextService: HeaderTextService,
    private authenticationService: AuthenticationService,
    private timeEntryService: TimeEntryService) { }

  ngOnInit() : void {
    this.headerTextService.emitTitle('Time Entry');

    this.initializeForm();
  }

  compareFn(c1: Option, c2: Option) : boolean {
    return (c1 && c2 ? c1.value === c2.value : c1 === c2);
  }

  onSubmit() : void {
    this.printFormValues();

    if (!this.jobName) {
      // TODO this is probably not the best way to handle this
      this.errorMessage = 'Job Name must be entered';
      this.errorDismissed = false;
    }
    else {

      let jobTime = this.getJobTimeFromFormValues();

      console.log(jobTime);

      this.timeEntryService.addJobTime(jobTime).subscribe(
        result => {
          console.log(result);
        },
        error => {
          console.log(error.message);
        },
        () => { console.log('onSubmit() request finished')}
      );
    }
  }

  private initializeForm() : void {

    this.timeInHour = '07';
    this.timeInMinute = '30';
    this.timeInPeriod = 'AM';
    this.timeOutHour = StringUtil.getTwoLengthStringFromNumber(
                              DateUtil.get2Length12HourHoursFrom24HourHours(this.currentTime.getHours()));
    this.timeOutMinute = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getMinutes());
    this.timeOutPeriod = DateUtil.getPeriodStringFrom24HourHours(this.currentTime.getHours());

    this.month = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getMonth() + 1);
    this.day = StringUtil.getTwoLengthStringFromNumber(this.currentTime.getDate());
    this.year = String(this.currentTime.getFullYear());

    this.hourOptions = StringUtil.getTwoLengthNumberStringOptions(1, 12, 1);
    this.minuteOptions = StringUtil.getTwoLengthNumberStringOptions(0, 59, 5);
    this.periodOptions = TimeEntryComponent.periodOptions;
    this.monthOptions = StringUtil.getTwoLengthNumberStringOptions(1, 12, 1);
    this.dayOptions =
        StringUtil.getTwoLengthNumberStringOptions(
                        1, DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)), 1);
    this.yearOptions = StringUtil.getNumberStringOptions(2010, 2020, 1);
  }

  private onErrorDismiss(errorDismissed: boolean) : void {
    this.errorDismissed = true;
  }

  private resolveNumberOfDaysInMonth() {
    this.dayOptions =
        StringUtil.getTwoLengthNumberStringOptions(
            1, DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)), 1);
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
