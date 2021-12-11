import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginRequest} from "../models/login-request";
import {Observable} from "rxjs";
import {LoginResponse} from "../models/login-response";
import {Links} from "../config/Links";
import {map, tap} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
  private token:string|null = null;
  public authSubject:Subject<null> = new Subject<null>();
  public logoutSubject:Subject<null> = new Subject<null>();

  constructor(@Inject(HttpClient) private http:HttpClient) { }

  public  auth(loginRequest:LoginRequest):Observable<LoginResponse> {
    return this.http.post(Links.url('/login'),loginRequest)
      .pipe(map(resp => LoginResponse.fromJson(resp)))
      .pipe(tap(r => {
        console.log(r);
        if(r.isSuccessful()) {
          this.authenticate(r.token);
        }
      }))
  }

  private authenticate(token: string | null) {
    this.token = token;
    this.authSubject.next(null);
  }

  public logout() {
    this.token = null;
    this.logoutSubject.next(null);
  }

  public getToken():string|null {
    return this.token;
  }

  public isAuth():boolean {
    return this.token !== null;
  }
}
