import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto.service';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListModule } from 'primeng/orderlist';
import { ListadoProductoResolver } from './guards/listado-producto.resolver';
import { NuevoFormApiComponent } from './nuevo-form-api/nuevo-form-api.component';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevoComponent,
    NuevoFormApiComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    OrderListModule
  ],
  providers: [
    ListadoProductoResolver,
    ProductoService
  ]
})
export class ProductoModule { }
