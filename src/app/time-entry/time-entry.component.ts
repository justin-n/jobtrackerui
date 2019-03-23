import { Component } from '@angular/core';
import { Option } from './option';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent {

  constructor() { }

  jobName: string;
  timeInHour: string = "01";

  hourOptions: Option[] = TimeEntryComponent.getHourOptions();

  onSubmit() {
    console.log("Job Name:", this.jobName);
    console.log("timeInHour:", this.timeInHour);
  }

  private static getHourOptions() : Option[] {

    let hourOptions: Option[] = [];

    for (let hour = 1; hour <= 12; hour++) {

      let hourStringValue = String(hour);

      if (hourStringValue.length == 1) {
        hourStringValue = ("0" + hourStringValue);
      }

      hourOptions.push({key: hourStringValue, value: hourStringValue});
    }

    return hourOptions;
  }
}
