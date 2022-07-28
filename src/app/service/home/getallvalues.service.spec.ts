import { TestBed } from '@angular/core/testing';

import { GetallvaluesService } from './getallvalues.service';

describe('GetallvaluesService', () => {
  let service: GetallvaluesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetallvaluesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
