import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {Contact} from "../../models/contact";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit, OnDestroy{
  contacts:Contact[] = [];
  isAuth:boolean = false;

  constructor(@Inject(ContactsService) private contactsService:ContactsService,
              @Inject(AuthService) private authAuth:AuthService) { }

  ngOnDestroy(): void {
    this.contacts = [];
  }

  ngOnInit(): void {
    if (this.authAuth.isAuth()) this.isAuth = true;
    console.log(this.isAuth);
    this.contactsService.getContacts().subscribe(r => {
      if(r.contacts !== null) this.contacts = r.contacts;
    })
  }
}
