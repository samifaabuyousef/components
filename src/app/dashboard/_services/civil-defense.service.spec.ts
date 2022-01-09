import { TestBed } from '@angular/core/testing';

import { CivilDefenseService } from './civil-defense.service';

describe('CivilDefenseService', () => {
  let service: CivilDefenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CivilDefenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
