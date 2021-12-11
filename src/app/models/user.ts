export class User {
  public login: string|null = null;
  public bornDate: string|null = null;

  static fromJson(o:any):User {
    let u = new User();
    u.login = o.login;
    u.bornDate = o.date_born;

    return u;
  }
}
