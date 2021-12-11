import {Inject, Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Links} from "../config/Links";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(@Inject(AuthService) private authService:AuthService, @Inject(HttpClient) private http:HttpClient) { }

  getContacts():Observable<any> {
    let token = this.authService.getToken();
    return this.http.get(Links.url('/contacts'), {
      headers: {
        'Authorization':'Bearer '+token
      }
    }).pipe(tap(a => console.log(a)));
  }
}
