import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of, take } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductosListService } from 'src/app/productos-list.service';

@Injectable({
  providedIn: 'root'
})
export class LoadProductsResolver implements Resolve<Producto[]> {
  constructor(private productSrv: ProductosListService) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  Observable<Producto[]> | Observable<any> {
    return this.productSrv.getProductos()
    .pipe(
      take(1),
      mergeMap(productos => {
        if (productos) {
          return of(productos)
        } 
        // navigate to anywhere
        return EMPTY;
      })
    )
  }
}
