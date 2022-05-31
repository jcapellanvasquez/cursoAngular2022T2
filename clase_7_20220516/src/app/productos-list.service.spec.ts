import { TestBed } from '@angular/core/testing';

import { ProductosListService } from './productos-list.service';

describe('ProductosListService', () => {
  let service: ProductosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
