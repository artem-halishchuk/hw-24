export class LoginRequest {
  constructor(public login:string, public password:string) {
  }

  clear() {
    this.login = '';
    this.password = '';
  }
}
