import { TestBed } from '@angular/core/testing';

import { RecuperationProjetService } from './recuperation-projet.service';

describe('RecuperationService', () => {
  let service: RecuperationProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperationProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
