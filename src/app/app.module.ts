import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from "@angular/forms";
import { ContactsComponent } from './components/contacts/contacts.component';
import {AuthGuard} from "./guard/auth.guard";
import { RegisterComponent } from './components/register/register.component';
import { CreateContactComponent } from './components/create-contact/create-contact.component';
import { TestComponent } from './components/test/test.component';
//import { NotFoundComponent }   from './not-found.component';

const routes:Routes = [
  {path:'login', component:LoginComponent},
  {path:'create-contact', component:CreateContactComponent, canActivate:[AuthGuard]},
  {path:'contacts', component:ContactsComponent, canActivate:[AuthGuard]},

  {path:'users', component:UsersComponent},

  {path:'register', component:RegisterComponent},

  {path:'', pathMatch:'full', redirectTo:'login'},
  //{ path: '**', component: NotFoundComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ContactsComponent,
    RegisterComponent,
    CreateContactComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
