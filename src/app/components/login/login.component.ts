import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HeaderTextService } from '../../services/header-text.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private headerTextService: HeaderTextService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Login');
  }

  userName = new FormControl('');
  password = new FormControl('');
}
