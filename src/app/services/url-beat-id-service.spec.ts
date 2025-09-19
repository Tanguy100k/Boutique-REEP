import { TestBed } from '@angular/core/testing';

import { UrlBeatIdService } from './url-beat-id-service';

describe('UrlBeatIdService', () => {
  let service: UrlBeatIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlBeatIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
