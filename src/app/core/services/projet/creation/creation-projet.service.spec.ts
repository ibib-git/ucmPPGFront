import { TestBed } from '@angular/core/testing';

import { CreationProjetService } from './creation-projet.service';

describe('CreationProjetService', () => {
  let service: CreationProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreationProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
