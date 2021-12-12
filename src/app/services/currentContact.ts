import {EventEmitter, Injectable} from '@angular/core';
import {Contact} from '../models/contact'
import {Observable, Subject} from "rxjs";

@Injectable ({
  providedIn: 'root'
})
export class CurrentContact {
  private contact:Contact|null = null;
  /*onClick:EventEmitter<Contact> = new EventEmitter();

  public doClick(c:Contact){
    this.contact = c;
    console.log('this is services');
    console.log(c);
    this.onClick.emit(this.contact);
  }*/

  private contactSubject:Subject<Contact> = new Subject<Contact>();
  public getContact():Observable<Contact> {
    return this.contactSubject;
  }

  public showContact(contact:Contact) {
    this.contact = contact;
    console.log('Заметка пришла в сервис');
    console.log(contact);
    this.contactSubject.next(this.contact);
  }

}
