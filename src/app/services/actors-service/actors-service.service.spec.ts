import { TestBed } from '@angular/core/testing';

import { DirectorsServiceService } from './actors-service.service';

describe('DirectorsServiceService', () => {
  let service: DirectorsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
