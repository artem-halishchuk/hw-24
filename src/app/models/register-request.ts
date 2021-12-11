export class RegisterRequest {
  constructor(public login:string, public password:string, public bornDate:string) {
  }

  public toJson():any{
    return {
      login:this.login,
      password:this.password,
      date_born:this.bornDate
    };
  }

  clear() {
    this.login = '';
    this.password = '';
    this.bornDate = '';
  }
}
