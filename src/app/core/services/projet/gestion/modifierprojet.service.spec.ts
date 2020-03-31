import { TestBed } from '@angular/core/testing';

import { ModifierprojetService } from './modifierprojet.service';

describe('ModifierprojetService', () => {
  let service: ModifierprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
