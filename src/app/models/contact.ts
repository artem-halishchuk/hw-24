export class Contact {
  public value: string|null = null;
  public name: string|null = null;
  public type: string|null = null;

  static fromJson(o:any):Contact {
    let c = new Contact();
    c.value = o.value;
    c.name = o.name;
    c.type = o.type;

    return c;
  }
}
