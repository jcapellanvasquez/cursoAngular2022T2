import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  public producto: Producto = {
    name: '',
    stock: 0,
    id: 0
  }
  constructor(public productoSrv: ProductoService) { }

  ngOnInit(): void {
  }

  public salvar() {
    this.productoSrv.saveProducto(this.producto)
    .subscribe(producto => {
      console.log("Producto salvado", producto)
    })
  }

}
