import {Component, Inject, OnDestroy, OnInit, Output} from '@angular/core';
import {ContactsService} from "../../services/contacts.service";
import {Contact} from "../../models/contact";
import {AuthService} from "../../services/auth.service";
import {CurrentContact} from "../../services/currentContact";

@Component({
  selector: 'app-contacts',
  providers: [CurrentContact],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit, OnDestroy{
  contacts:Contact[] = [];
  isAuth:boolean = false;
  public getContact:Contact|null = null;
  public name:string|null = null;
  public type:string|null = null;
  public value:string|null = null;
  public out:string|null = null;

  constructor(@Inject(ContactsService) private contactsService:ContactsService,
              @Inject(AuthService) private authAuth:AuthService,
              @Inject(CurrentContact) private currentContact:CurrentContact) {
    currentContact.getContact().subscribe(contact => {
      this.getContact = contact;
      console.log('принятая заметка');
      console.log(this.getContact);
      this.name = contact.name;
      this.type = contact.type;
      this.value = contact.value;
      if(this.getContact) this.out = this.name + ' - ' + this.type + ' ' + this.value;
      else this.out = null;
    });

  }

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
  showContact(contact:Contact) {
    console.log('отдали заметку в сервис');
    console.log(contact);
    this.currentContact.showContact(contact);
  }
}
