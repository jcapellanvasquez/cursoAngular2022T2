import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase_7_20220516';
  items: MenuItem[] = [];

  constructor() {
    this.items = [
      { 
        icon: 'pi pi-home', 
        routerLink: 'inicio', 
        label: 'Inicio'
      },
      { 
        icon: 'pi pi-users', 
        routerLink: 'cliente', 
        label: 'Clientes' 
      }
    ]
  }
}
