import {Component, Inject, OnInit} from '@angular/core';
import {RegisterRequest} from "../../models/register-request";
import {RegisterService} from "../../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  public registerRequest = new RegisterRequest('', '', '');
  public error:string|null = null;
  public isRegister:boolean = false;

  constructor(@Inject(RegisterService) private registerService:RegisterService) {
  }

  register() {
    this.registerService.register(this.registerRequest)
      .subscribe(
        r => {
          if(!r.isSuccessful()) {
            this.isRegister = true;
            this.error = r.error;
          }
          else {
            this.ngOnInit();
            this.error = "User is registered";
            setTimeout(() => this.ngOnInit(), 2000);
          }
        },
        () => this.error = 'Unknown error'
      );
  }

  ngOnInit(): void {
    this.error = null;
    this.registerRequest.clear();
  }

}
