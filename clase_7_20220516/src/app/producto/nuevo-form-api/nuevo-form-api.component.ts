import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-nuevo-form-api',
  templateUrl: './nuevo-form-api.component.html',
  styleUrls: ['./nuevo-form-api.component.css']
})
export class NuevoFormApiComponent implements OnInit {

  public producto: Producto = {
    name: '',
    stock: 0,
    id: 0
  }

  public form: FormGroup;

  constructor(public productoSrv: ProductoService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      "name": ['', [Validators.required, Validators.minLength(5)]],
      "stock": [0, [Validators.required, Validators.min(1)]],
      "id": [0],
    });
    console.log(this.form)
  }

  ngOnInit(): void {
  }


  get name() {
    return this.form.get('name')
  }

  public salvar() {

    console.log(this.form)

    // this.productoSrv.saveProducto(this.producto)
    // .subscribe(producto => {
    //   console.log("Producto salvado", producto)
    // })
  }
}
