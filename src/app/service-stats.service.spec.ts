import { TestBed } from '@angular/core/testing';

import { ServiceStatsService } from './service-stats.service';

describe('ServiceStatsService', () => {
  let service: ServiceStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
