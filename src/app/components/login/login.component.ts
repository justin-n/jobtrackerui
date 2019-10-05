import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { HeaderTextService } from '../../services/header-text.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private credentials = {username: '', password: ''};

  constructor(
    private headerTextService: HeaderTextService,
    private authenticationService: AuthenticationService,
    private http: HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.headerTextService.emitTitle('Login');
  }

  login() {
    this.authenticationService.authenticate(this.credentials, () => {

      if (this.authenticationService
              .getPrincipalInfo()
              .getAuthorities()
              .map(auth => auth.getName())
              .indexOf('ROLE_BOSS') > -1) {

        this.router.navigateByUrl('/console');
      }
      else {
        this.router.navigateByUrl('/timeentry');
      }

    });
    return false;
  }
}
