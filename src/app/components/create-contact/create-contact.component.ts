import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {CreateContactRequest} from "../../models/createContact-request";
import {CreateContactService} from "../../services/create-contact.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.less']
})
export class CreateContactComponent{

  public createContactRequest = new CreateContactRequest('', '', '');
  public massage:string|null = null;

  constructor(@Inject(AuthService) private authService:AuthService,
              @Inject(CreateContactService) private createContactService:CreateContactService) {
  }

  public token = this.authService.getToken();

  createContact() {
    console.log(this.token);
    if (!this.authService.isAuth()) return;
    this.createContactService.createContact(this.createContactRequest)
      .subscribe(
        r => {
          if(r.isSuccessful()) {
            this.ngOnDestroy();
            this.massage = 'Контакт добавлен';
            setTimeout(() => this.ngOnDestroy(), 2000);
          }
          else {
            this.massage = 'Ошибка';
            setTimeout(() => {
              this.massage = null;
            }, 2000);
          }
        },

      );
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
    this.massage = null;
    this.createContactRequest = new CreateContactRequest('', '', '');
  }
}
