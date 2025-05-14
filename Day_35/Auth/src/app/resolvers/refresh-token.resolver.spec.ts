import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { refreshTokenResolver } from './refresh-token.resolver';

describe('refreshTokenResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => refreshTokenResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
