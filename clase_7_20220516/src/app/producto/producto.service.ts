import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable()
export class ProductoService {
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + "/products").pipe(delay(5000));
  }

  public saveProducto(producto: Producto): Observable<Producto> {
    // const producto: Producto = {
    //   name: "Mi producto desde Angular",
    //   stock: 200,
    //   id: 0
    // }
    return this.http.post<Producto>(this.url + '/products',producto)
  }

  public updateProducto(): Observable<Producto> {
    const producto: Producto = {
      name: "[editado] - Mi producto desde Angular",
      stock: 200,
      id: 101
    }
    return this.http.put<Producto>(this.url + '/products/' + producto.id,producto)
  }

  public deleteProducto(): Observable<Producto> {
    const producto: Producto = {
      name: "[editado] - Mi producto desde Angular",
      stock: 200,
      id: 1
    }
    return this.http.delete<Producto>(this.url + '/products/' + producto.id)
  }
}
