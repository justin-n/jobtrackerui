import { Component, OnInit } from '@angular/core';

import { Option } from '../../util/option';
import { StringUtil } from '../../util/string-util';
import { DateUtil } from '../../util/date-util';
import { HeaderTextService } from '../../services/header-text.service';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent implements OnInit {

  constructor(private headerTextService: HeaderTextService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Time Entry');
  }

  public headerText: string;;

  static readonly periodOptions: Option[] = [
    { key: "AM", value: "AM" },
    { key: "PM", value: "PM" }
  ];

  jobName: string;
  timeInHour: string = "01";
  timeInMinute: string = "00";
  timeInPeriod: string = "AM";
  timeOutHour: string = "01";
  timeOutMinute: string = "00";
  timeOutPeriod: string = "AM";

  month: string = "01";
  day: string = "01";
  year: string = "2019";

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

  onSubmit() {
    console.log("Job Name:", this.jobName);
    console.log("timeInHour:", this.timeInHour);
    console.log("timeInMinute:", this.timeInMinute);
    console.log("timeInPeriod:", this.timeInPeriod);
    console.log("timeOutHour:", this.timeOutHour);
    console.log("timeOutMinute:", this.timeOutMinute);
    console.log("timeOutPeriod:", this.timeOutPeriod);
    console.log("month:", this.month);
    console.log("daysInMonth:",
                DateUtil.getNumberOfDaysInMonth(Number(this.month), Number(this.year)));
    console.log("day:", this.day);
    console.log("year:", this.year);
    console.log("comment:", this.comment);
  }
}
