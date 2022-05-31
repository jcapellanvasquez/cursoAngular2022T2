import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { LoadProductsResolver } from './guards/load-products.resolver';
import { ListadoProductoResolver } from './guards/listado-producto.resolver';
import { NuevoFormApiComponent } from './nuevo-form-api/nuevo-form-api.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent,
    resolve: {
      productos: ListadoProductoResolver
    }
  },
  {
    path: 'nuevo',
    component: NuevoComponent,
  },
  {
    path: 'nuevo-form-api',
    component: NuevoFormApiComponent
  },
  {
    pathMatch: '',
    path: '',
    redirectTo: 'listado'
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
