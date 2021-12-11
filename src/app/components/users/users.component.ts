import {Component, Inject, OnDestroy, OnInit} from '@angular/core';

import {User} from "../../models/user";
import {UsersService} from "../../services/users.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit, OnDestroy{

  users:User[] = [];
  constructor(@Inject(UsersService) private usersService:UsersService,
              @Inject(AuthService) private authAuth:AuthService) {
  }

  isAuth:boolean = false;

  ngOnDestroy(): void {
    this.users = [];
  }

  ngOnInit(): void {
    if (this.authAuth.isAuth()) this.isAuth = false;
    this.usersService.getAll().subscribe(r => {
      if(r.users !== null) this.users = r.users;
    })
  }

}
