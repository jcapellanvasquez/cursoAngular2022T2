import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';

const routes: Routes = [
  {
    path: 'listado',
    component: ListadoComponent,
  },
  {
    path: 'nuevo',
    component: NuevoComponent,
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
