import { TestBed } from '@angular/core/testing';

import { DiodeService } from './diode.service';

describe('DiodeService', () => {
  let service: DiodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
