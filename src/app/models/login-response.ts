export class LoginResponse {
  public token:string|null = null;
  public status:string|null = null;
  public error:string|null = null;
  static fromJson(o:any):LoginResponse{
    let resp = new LoginResponse();
    resp.error = o.error;
    resp.token = o.token;
    resp.status = o.status;
    return resp;
  }
  public  isSuccessful():boolean {
    return this.status == 'ok';
  }
}
