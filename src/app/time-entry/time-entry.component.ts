import { Component } from '@angular/core';

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent {

  constructor() { }

  jobName: string;

  onSubmit() {
    console.log("Job Name:", this.jobName);
  }
}
