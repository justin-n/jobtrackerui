import { Component, OnInit } from '@angular/core';
import { HeaderTextService } from 'src/app/services/header-text.service';

@Component({
  selector: 'app-test-links',
  templateUrl: './test-links.component.html',
  styleUrls: ['./test-links.component.css']
})
export class TestLinksComponent implements OnInit {

  constructor(private headerTextService: HeaderTextService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Test Links');
  }

}
