export class CreateContactRequest {
  constructor(public type:string, public value:string, public name:string) {
  }

  clear() {
    this.type = '';
    this.value = '';
    this.name = '';
  }
}
