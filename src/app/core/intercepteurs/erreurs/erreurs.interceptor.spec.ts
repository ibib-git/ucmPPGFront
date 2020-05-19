import { TestBed } from '@angular/core/testing';

import { ErreursInterceptor } from './erreurs.interceptor';

describe('ErreursInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ErreursInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ErreursInterceptor = TestBed.inject(ErreursInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
