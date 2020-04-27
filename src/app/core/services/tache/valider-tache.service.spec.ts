import { TestBed } from '@angular/core/testing';

import { ValiderTacheService } from './valider-tache.service';

describe('ValiderTacheService', () => {
  let service: ValiderTacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValiderTacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
