export class RegisterResponse {
  public status:string|null = null;
  public error:string|null = null;
  static fromJson(o:any):RegisterResponse{
    let resp = new RegisterResponse();
    resp.error = o.error;
    resp.status = o.status;
    return resp;
  }



  public  isSuccessful():boolean {
    return this.status == 'ok';
  }
}
