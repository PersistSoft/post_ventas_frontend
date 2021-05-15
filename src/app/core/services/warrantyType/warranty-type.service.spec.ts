import { TestBed } from '@angular/core/testing';

import { WarrantyTypeService } from './warranty-type.service';

describe('WarrantyTypeService', () => {
  let service: WarrantyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarrantyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
