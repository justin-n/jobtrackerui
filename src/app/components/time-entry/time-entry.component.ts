import { Component, OnInit } from '@angular/core';
import { SelectControlValueAccessor } from '@angular/forms';

import { Option } from '../../util/option';
import { StringUtil } from '../../util/string-util';
import { DateUtil } from '../../util/date-util';
import { HeaderTextService } from '../../services/header-text.service';

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

  constructor(private headerTextService: HeaderTextService) { }

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
