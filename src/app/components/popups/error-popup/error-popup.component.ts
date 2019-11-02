import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-popup',
  templateUrl: './error-popup.component.html',
  styleUrls: [
    './error-popup.component.css',
    '../../../styles/popup.css'
  ]
})
export class ErrorPopupComponent {

  @Input() message: string;

  @Output() errorDismissed = new EventEmitter<boolean>();

  constructor() { }

  dismissError() {
    this.errorDismissed.emit(true);
  }
}
