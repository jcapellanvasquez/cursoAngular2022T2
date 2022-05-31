import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductosListService } from 'src/app/productos-list.service';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public productos: Producto[] = []
  constructor(public productoSrv: ProductoService, private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.data.subscribe( data => {
      this.productos = data['productos']
    })

    // this.productoSrv.getProductos().subscribe( productos => this.productos = productos)
    // this.productoSrv.saveProducto().subscribe( productos => console.log(productos))
    // this.productoSrv.updateProducto().subscribe( productos => console.log(productos))
    // this.productoSrv.deleteProducto().subscribe( productos => console.log(productos))
  }

}
