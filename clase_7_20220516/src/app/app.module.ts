import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {ButtonModule} from 'primeng/button';
import { ClienteComponent } from './cliente/cliente.component';
import { InicioComponent } from './inicio/inicio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {OrderListModule} from 'primeng/orderlist';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    InicioComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    CardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
