import {Inject, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Links} from "../config/Links";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {RegisterRequest} from "../models/register-request";
import {RegisterResponse} from "../models/register-response";

@Injectable({providedIn: 'root'})
export class RegisterService {
  public registerSubject:Subject<null> = new Subject<null>();

  constructor(@Inject(HttpClient) private http:HttpClient) { }

  public  register(registerRequest:RegisterRequest):Observable<RegisterResponse> {
    return this.http.post(Links.url('/register'),registerRequest.toJson())
      .pipe(map(resp => RegisterResponse.fromJson(resp)))
      .pipe(tap(r => {
        if(r.isSuccessful()) {
          console.log(r);
          //this.authenticate(r.token);
        }
        else console.log(r);
      }))
  }
}
