import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit {

  @Input()
  nombre: string = "Julio J. Capellán"

  constructor() { }

  ngOnInit(): void {
  }

}
