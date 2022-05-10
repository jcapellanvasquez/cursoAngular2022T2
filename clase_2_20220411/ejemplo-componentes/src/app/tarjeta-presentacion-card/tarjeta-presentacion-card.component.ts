import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-tarjeta-presentacion-card',
  templateUrl: './tarjeta-presentacion-card.component.html',
  styleUrls: ['./tarjeta-presentacion-card.component.css']
})
export class TarjetaPresentacionCardComponent implements OnInit {

  @Input()
  public id=0;

  @Input()
  public nombre="";

  @Input()
  public bio="";

  @Input()
  public ocupacion="";

  
  @Input()
  public sueldo=0;

  
  @Input()
  public date = "";


  @Output()
  public onEliminar: EventEmitter<number> = new EventEmitter<number>();

  public sueldo2 = 4254562.35655;
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    this.onEliminar.emit(this.id);
  }

  public getData() {
    return `nombre: ${this.nombre}, bio: ${this.bio}`;
  }

  public setData(nombre: string, bio: string) {
    this.nombre = nombre;
    this.bio = bio;
  }

}
