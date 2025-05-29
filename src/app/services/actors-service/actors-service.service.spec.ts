import { TestBed } from '@angular/core/testing';

import { ActorServiceService } from './actors-service.service';

describe('DirectorsServiceService', () => {
  let service: ActorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
