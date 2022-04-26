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

  @Output()
  public onEliminar: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  eliminar() {
    this.onEliminar.emit(this.id);
  }

}
