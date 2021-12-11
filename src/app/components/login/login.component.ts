import {Component, Inject, OnInit} from '@angular/core';
import {LoginRequest} from "../../models/login-request";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{

  public loginRequest = new LoginRequest('', '');
  public error:string|null = null;
  public isLogin:boolean = false;

  constructor(@Inject(AuthService) private authService:AuthService) {
  }

  login() {
    this.authService.auth(this.loginRequest)
      .subscribe(
        r => {
          if(!r.isSuccessful()) {
            this.error = r.error;
            this.isLogin = true;
          }
        },
        () => this.error = 'Неизвестная ошибка'
      );
  }

  ngOnInit(): void {
    this.error = null;
    this.loginRequest.clear();
  }
}
