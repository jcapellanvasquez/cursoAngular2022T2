import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, mergeMap, Observable, of, take } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../producto.service';

@Injectable()
export class ListadoProductoResolver implements Resolve<Producto[]> {

  constructor(private productosSrv: ProductoService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Producto[]> {
    return this.productosSrv.getProductos()
    .pipe(
      take(1),
      mergeMap(productos => {
        if (productos.length > 0) {
          return of(productos)
        }
        const resp = confirm("No se encontro el listado de productos")
        if (resp) {
          this.router.navigate(['producto/nuevo'])
        }
        return EMPTY;
      })
    );
  }

}
