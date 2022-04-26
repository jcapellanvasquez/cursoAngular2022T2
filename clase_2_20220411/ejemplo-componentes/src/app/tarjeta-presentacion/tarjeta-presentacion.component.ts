import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.css']
})
export class TarjetaPresentacionComponent implements OnInit, OnChanges {

  /**
   * On way binding de entrada
   */
  @Input()
  nombre: string = "Julio J. Capellán"

  /**
   * On way binding de entrada
   */
  @Input()
  apellido: string = "Capellán"


  /**
   * On way binding de salida o sea hacia el componente padre
   */
  @Output()
  public onGetNombre: EventEmitter<string>  = new EventEmitter();

    /**
   * two way binding de salida o sea hacia el componente padre
   * NOTA: tomar en cuenta la palabra change en el evento ocupacionChange,
   * es necesario para el mapeao que hace angular
   */
  @Input()
  ocupacion: string = ""
  
  @Output()
  ocupacionChange: EventEmitter<string>  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit: Componente renderizado")
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes)
  }

  public getNombre() {
    this.onGetNombre.emit(this.nombre + this.apellido);
  }

  public changeOcupacion(ocup: string) {
    this.ocupacion = ocup;
    this.ocupacionChange.emit(ocup);
  }

  public resetOcupacion() {
    this.ocupacion = "Docente"
  }
}
