import {User} from "./user";

export class GetUsersResponse {
  public status:string|null = null;
  public error:string|null = null;
  public users:User[]|null = null;

  static fromJson(o:any):GetUsersResponse{
    let resp = new GetUsersResponse();
    resp.error = o.error;
    resp.status = o.status;
    if (o.users !== null) resp.users = (o.users as any[]).map(u => User.fromJson(u));
    return resp;
  }

  public  isSuccessful():boolean {
    return this.status == 'ok';
  }
}
