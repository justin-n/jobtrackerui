import { Component } from '@angular/core';
import { HeaderTextService } from './services/header-text.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
      private router: Router,
      private headerTextService: HeaderTextService) {

    headerTextService.headerEmitted$.subscribe(
      headerText => { this.headerText = headerText; });
  }

  private headerText: string;

  public navToUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
