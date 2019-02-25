import { TestBed } from '@angular/core/testing';

import { RegionServiceService } from './region-service.service';

describe('RegionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegionServiceService = TestBed.get(RegionServiceService);
    expect(service).toBeTruthy();
  });
});
