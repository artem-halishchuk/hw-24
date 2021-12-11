export class CreateContactResponse {
  public status:string|null = null;
  static fromJson(o:any):CreateContactResponse{
    let resp = new CreateContactResponse();
    resp.status = o.status;
    return resp;
  }
  public isSuccessful():boolean {
    return this.status == 'ok';
  }
}
