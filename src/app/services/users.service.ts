import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Links} from "../config/Links";
import {map} from "rxjs/operators";
import {GetUsersResponse} from "../models/get-users-response";

//import {Subject} from "rxjs/dist/types";

@Injectable({providedIn: 'root'})
export class UsersService {

  constructor(@Inject(HttpClient) private http:HttpClient) { }

  public  getAll():Observable<GetUsersResponse> {
    return this.http.get(Links.url('/users'))
      .pipe(map(resp => GetUsersResponse.fromJson(resp)))
  }
}
