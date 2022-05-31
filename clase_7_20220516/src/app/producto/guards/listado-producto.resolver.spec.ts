import { TestBed } from '@angular/core/testing';

import { ListadoProductoResolver } from './listado-producto.resolver';

describe('ListadoProductoResolver', () => {
  let resolver: ListadoProductoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListadoProductoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
