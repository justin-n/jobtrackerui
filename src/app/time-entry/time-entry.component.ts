import { Component } from '@angular/core';

export interface NumericMonth {
  value: string;
  viewValue: string;
}

const DATA = [
  { column0value: 'A1', column1value: 'A2' },
  { column0value: 'B1', column1value: 'B2' }
];

@Component({
  selector: 'app-time-entry',
  templateUrl: './time-entry.component.html',
  styleUrls: ['./time-entry.component.css']
})
export class TimeEntryComponent {

  constructor() { }

  columnsToDisplay = ['firstColumn', 'secondColumn'];

  dataSource = DATA;
}
