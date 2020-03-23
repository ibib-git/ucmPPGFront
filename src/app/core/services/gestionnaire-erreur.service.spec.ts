import { TestBed } from '@angular/core/testing';

import { GestionnaireErreurService } from './gestionnaire-erreur.service';

describe('GestionnaireErreurService', () => {
  let service: GestionnaireErreurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionnaireErreurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
