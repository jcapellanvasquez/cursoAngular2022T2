import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SessionGuard } from './session.guard';

const routes: Routes = [
  {
    path: 'cliente',
    component: ClienteComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path:'producto',
    canActivate: [SessionGuard],
    loadChildren: () => import('./producto/producto.module').then( m => m.ProductoModule),
  },
  {
    pathMatch: 'full',
    path:'',
    redirectTo: 'inicio'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false /* Activar debugger de las rutas */})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
