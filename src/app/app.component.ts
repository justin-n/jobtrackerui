import { Component } from '@angular/core';
import { HeaderTextService } from './services/header-text.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private headerTextService: HeaderTextService) {
    headerTextService.headerEmitted$.subscribe(
      headerText => { this.headerText = headerText; });
  }

  private headerText: string;
}
