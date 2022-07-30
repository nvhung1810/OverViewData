import { TestBed } from '@angular/core/testing';

import { LaythongtinService } from './laythongtin.service';

describe('LaythongtinService', () => {
  let service: LaythongtinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaythongtinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
