import { Component } from '@angular/core';

import { Option } from '../util/option';
import { StringUtil } from '../util/string-util';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent {

  constructor() { }

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

  hourOptions: Option[] = StringUtil.getTwoLengthNumStrOptions(1, 12, 1);
  minuteOptions: Option[] = StringUtil.getTwoLengthNumStrOptions(0, 59, 5);
  periodOptions: Option[] = TimeEntryComponent.periodOptions;
  monthOptions: Option[] = StringUtil.getTwoLengthNumStrOptions(1, 12, 1);

  onSubmit() {
    console.log("Job Name:", this.jobName);
    console.log("timeInHour:", this.timeInHour);
    console.log("timeInMinute:", this.timeInMinute);
    console.log("timeInPeriod:", this.timeInPeriod);
    console.log("timeOutHour:", this.timeOutHour);
    console.log("timeOutMinute:", this.timeOutMinute);
    console.log("timeOutPeriod:", this.timeOutPeriod);
    console.log("month:", this.month);
  }

}
