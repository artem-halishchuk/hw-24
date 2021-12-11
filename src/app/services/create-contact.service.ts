import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Links} from "../config/Links";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {CreateContactRequest} from "../models/createContact-request";
import {CreateContactResponse} from "../models/createContact-response";
import {AuthService} from "../services/auth.service";


@Injectable({providedIn: 'root'})
export class CreateContactService {

  constructor(@Inject(HttpClient) private http:HttpClient,
              @Inject(AuthService) private authService:AuthService,) {
  }

  public token = this.authService.getToken();
  public response:string|null = null;

  public  createContact(createContactRequest:CreateContactRequest):Observable<CreateContactResponse> {
    return this.http.post(Links.url('/contacts/add'),createContactRequest,
      {headers: {
        'Authorization':'Bearer '+this.token,
        'Accept':'application/json',
        'Content-Type':'application/json'
      }})
      .pipe(map(resp => CreateContactResponse.fromJson(resp)))
      .pipe(tap(r => {
        if(r.isSuccessful()) {
          console.log(r);
          console.log('contact added');
        }
        else {
          console.log(r);
          console.log('contact no added');
        }
      }))
  }
}
