import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-componentes';
  ocupacion = 'Programador';
  public personas = [{
    "id": 1,
    "name": "Wylie Boame",
    "ocupacion": "Programador",
    "bio": "amet eleifend pede libero quis orci nullam molestie"
  }, {
    "id": 2,
    "name": "Fiona Caldera",
    "ocupacion": "Maestro",
    "bio": "neque duis bibendum morbi non quam nec dui luctus rutrum"
  }, {
    "id": 3,
    "name": "Matty Sherred",
    "ocupacion": "Programador",
    "bio": "malesuada in imperdiet et commodo vulputate justo in blandit ultrices"
  }, {
    "id": 4,
    "name": "Aluino Dorkins",
    "ocupacion": "Programador",
    "bio": "penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus"
  }, {
    "id": 5,
    "name": "Wallas Rizzardini",
    "ocupacion": "Otro",
    "bio": "erat vestibulum sed magna at nunc commodo placerat praesent blandit"
  }, {
    "id": 6,
    "name": "Gratia Jeves",
    "ocupacion": "Programador",
    "bio": "non mauris morbi non lectus aliquam sit amet"
  }, {
    "id": 7,
    "name": "Avigdor Baudy",
    "ocupacion": "Programador",
    "bio": "nisl nunc rhoncus dui vel"
  }, {
    "id": 8,
    "name": "Artur Hazlewood",
    "ocupacion": "Otro",
    "bio": "dapibus nulla suscipit ligula in lacus curabitur at ipsum"
  }, {
    "id": 9,
    "name": "Sutherland Fensome",
    "ocupacion": "Maestro",
    "bio": "penatibus et magnis dis parturient montes nascetur ridiculus"
  }, {
    "id": 10,
    "name": "Stephen Draude",
    "ocupacion": "Programador",
    "bio": "morbi vel lectus in quam fringilla rhoncus"
  }, {
    "id": 11,
    "name": "Laurice Postins",
    "ocupacion": "Maestro",
    "bio": "mauris eget massa tempor convallis"
  }, {
    "id": 12,
    "name": "Meris Sneezem",
    "ocupacion": "Programador",
    "bio": "venenatis tristique fusce congue diam id ornare imperdiet sapien urna"
  }, {
    "id": 13,
    "name": "Trude Jan",
    "ocupacion": "Programador",
    "bio": "nisi vulputate nonummy maecenas tincidunt lacus at"
  }, {
    "id": 14,
    "name": "Hailee Standell",
    "ocupacion": "Maestro",
    "bio": "potenti in eleifend quam a odio in hac"
  }, {
    "id": 15,
    "name": "Herminia MacGill",
    "ocupacion": "Maestro",
    "bio": "turpis elementum ligula vehicula consequat morbi a"
  }, {
    "id": 16,
    "name": "Noble Alcott",
    "ocupacion": "Otro",
    "bio": "sodales sed tincidunt eu felis"
  }, {
    "id": 17,
    "name": "Jacquie Bernocchi",
    "ocupacion": "Programador",
    "bio": "habitasse platea dictumst maecenas ut massa quis augue"
  }, {
    "id": 18,
    "name": "Elizabet Eagan",
    "ocupacion": "Chef",
    "bio": "habitasse platea dictumst etiam faucibus cursus urna ut tellus"
  }, {
    "id": 19,
    "name": "Coralie Baszniak",
    "ocupacion": "Maestro",
    "bio": "libero nam dui proin leo odio porttitor"
  }, {
    "id": 20,
    "name": "Waylan Goaks",
    "ocupacion": "Chef",
    "bio": "proin risus praesent lectus vestibulum quam"
  }, {
    "id": 21,
    "name": "Rad Haggath",
    "ocupacion": "Maestro",
    "bio": "sit amet sapien dignissim vestibulum vestibulum"
  }, {
    "id": 22,
    "name": "Carolina Gatsby",
    "ocupacion": "Programador",
    "bio": "non velit donec diam neque vestibulum eget vulputate"
  }, {
    "id": 23,
    "name": "Marilin Asipenko",
    "ocupacion": "Chef",
    "bio": "tristique fusce congue diam id ornare imperdiet"
  }, {
    "id": 24,
    "name": "Tanney Bereford",
    "ocupacion": "Programador",
    "bio": "justo sit amet sapien dignissim vestibulum vestibulum"
  }, {
    "id": 25,
    "name": "Roman Parrett",
    "ocupacion": "Chef",
    "bio": "sed vestibulum sit amet cursus id turpis"
  }, {
    "id": 26,
    "name": "Johnathan Bartleman",
    "ocupacion": "Maestro",
    "bio": "et ultrices posuere cubilia curae mauris viverra diam vitae quam"
  }, {
    "id": 27,
    "name": "Sybilla Lunny",
    "ocupacion": "Programador",
    "bio": "cursus urna ut tellus nulla ut"
  }, {
    "id": 28,
    "name": "Perry Shannon",
    "ocupacion": "Otro",
    "bio": "pellentesque viverra pede ac diam cras pellentesque volutpat"
  }, {
    "id": 29,
    "name": "Mikael Uzelli",
    "ocupacion": "Chef",
    "bio": "cras mi pede malesuada in"
  }, {
    "id": 30,
    "name": "Dell Sothcott",
    "ocupacion": "Maestro",
    "bio": "augue vel accumsan tellus nisi eu orci mauris lacinia sapien"
  }];
 

  public mostrarNombre(nombre: string) {
    alert("El nombres: " + nombre)
  }

  cambiarOcupacion() {
    this.ocupacion = "Maestro"
  }

  dividirPersonas() {
    this.personas.length = 2
  }

  eliminar(id: number) {
    const index = this.personas.findIndex( p => p.id === id);
    this.personas.splice(index, 1)
  }
}
