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

@NgModule({
  declarations: [
    AppComponent,
    TarjetaPresentacionComponent,
    TarjetaPresentacionCardComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
