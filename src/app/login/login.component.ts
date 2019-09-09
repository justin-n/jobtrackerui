import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderTextService } from '../services/header-text.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private router: Router,
      private headerTextService: HeaderTextService) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Login');
  }

  userName = new FormControl('');
  password = new FormControl('');

  navToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }
}
