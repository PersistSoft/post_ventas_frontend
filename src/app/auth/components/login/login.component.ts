import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: LoginModel;
  constructor() {}

  ngOnInit(): void {}
}
