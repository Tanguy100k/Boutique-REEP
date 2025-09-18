import { TestBed } from '@angular/core/testing';

import { LicenseInfoPanelService } from './license-info-panel-service';

describe('LicenseInfoPanelService', () => {
  let service: LicenseInfoPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LicenseInfoPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
