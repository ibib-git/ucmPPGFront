import { TestBed } from '@angular/core/testing';

import { GestionTacheService } from './gestionTache.service';

describe('GestionService', () => {
  let service: GestionTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
