import { TestBed } from '@angular/core/testing';

import { AdvertismentService } from './advertisment.service';

describe('AdvertismentService', () => {
  let service: AdvertismentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvertismentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
