import { Component } from '@angular/core';
import { Option } from './option';

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

  hourOptions: Option[] = TimeEntryComponent.getTwoLengthNumStrOptions(1, 12, 1);
  minuteOptions: Option[] = TimeEntryComponent.getTwoLengthNumStrOptions(0, 59, 5);
  periodOptions: Option[] = TimeEntryComponent.periodOptions;
  monthOptions: Option[] = TimeEntryComponent.getTwoLengthNumStrOptions(1, 12, 1);

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

  private static getTwoLengthNumStrOptions(
      startingValue: number,
      totalOptions: number,
      incrementValue: number) : Option[] {

    let options: Option[] = [];

    for (let optionIndex = startingValue; optionIndex <= totalOptions; optionIndex += incrementValue) {

      let stringValue = String(optionIndex);

      if (stringValue.length == 1) {
        stringValue = ("0" + stringValue);
      }

      options.push({key: stringValue, value: stringValue});
    }

    return options;
  }
}
