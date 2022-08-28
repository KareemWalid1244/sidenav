import { TestBed } from '@angular/core/testing';

import { ServService } from './srv.service';

describe('NamesrvService', () => {
  let service:ServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
