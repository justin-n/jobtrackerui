import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-test',
  templateUrl: './auth-test.component.html',
  styleUrls: ['./auth-test.component.css']
})
export class AuthTestComponent {

  constructor(
    private authenticationService: AuthenticationService,
    private http: HttpClient) { }

}
