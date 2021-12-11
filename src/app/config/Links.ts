export class Links {
  static API_BASE_URL = 'https://mag-contacts-api.herokuapp.com';
  static url(s:string):string {
    return Links.API_BASE_URL+s;
  }
}
