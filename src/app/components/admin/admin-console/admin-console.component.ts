import { Component, OnInit } from '@angular/core';
import { HeaderTextService } from 'src/app/services/header-text.service';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.css']
})
export class AdminConsoleComponent implements OnInit {

  constructor(private headerTextService : HeaderTextService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Console');
  }

}
