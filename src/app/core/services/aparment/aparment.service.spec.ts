import { TestBed } from '@angular/core/testing';

import { AparmentService } from './aparment.service';

describe('AparmentService', () => {
  let service: AparmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AparmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
