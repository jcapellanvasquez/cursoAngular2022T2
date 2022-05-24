import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoService } from './producto.service';
import { NuevoComponent } from './nuevo/nuevo.component';
import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  providers: [
    ProductoService
  ]
})
export class ProductoModule { }
