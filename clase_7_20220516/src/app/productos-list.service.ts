import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosListService {
  
  private url = "http://localhost:3000"
  constructor(private http: HttpClient) { }

  public getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.url + "/products").pipe(delay(5000));
  }
  
}
