import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
