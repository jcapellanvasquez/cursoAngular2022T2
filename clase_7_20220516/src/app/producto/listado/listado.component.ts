import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(public productoSrv: ProductoService) { }

  ngOnInit(): void {
    this.productoSrv.getProductos().subscribe( productos => console.log(productos))
    // this.productoSrv.saveProducto().subscribe( productos => console.log(productos))
    this.productoSrv.updateProducto().subscribe( productos => console.log(productos))
    this.productoSrv.deleteProducto().subscribe( productos => console.log(productos))
  }

}
