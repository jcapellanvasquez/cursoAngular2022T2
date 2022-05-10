import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TarjetaPresentacionComponent } from './tarjeta-presentacion/tarjeta-presentacion.component';

/*
* Modulos de primeng
*/
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import { TarjetaPresentacionCardComponent } from './tarjeta-presentacion-card/tarjeta-presentacion-card.component';
import { CustomPipe } from './custom.pipe';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes : Routes = [
  {
    path: 'mi-primera-ruta',
    component: TarjetaPresentacionComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPresentacionComponent,
    TarjetaPresentacionCardComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
