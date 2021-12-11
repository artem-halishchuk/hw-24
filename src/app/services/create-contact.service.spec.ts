import { TestBed } from '@angular/core/testing';

import { CreateContactService } from './create-contact.service';

describe('CreateContactService', () => {
  let service: CreateContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
