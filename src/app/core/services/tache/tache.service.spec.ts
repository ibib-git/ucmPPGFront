import { TestBed } from '@angular/core/testing';

import { TacheService } from './tache.service';

describe('ValiderTacheService', () => {
  let service: TacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
