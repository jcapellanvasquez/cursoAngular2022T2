import { Component, ViewChild } from '@angular/core';
import { TarjetaPresentacionCardComponent } from './tarjeta-presentacion-card/tarjeta-presentacion-card.component';

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
    "name": "Mickey Stebbin",
    "ocupacion": "Programador",
    "bio": "rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed",
    "date": "4/12/2022",
    "sueldo": 58425
  }, {
    "id": 2,
    "name": "Tiler Hews",
    "ocupacion": "Otro",
    "bio": "habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat",
    "date": "11/20/2021",
    "sueldo": 35695
  }, {
    "id": 3,
    "name": "Robinetta Cosbey",
    "ocupacion": "Maestro",
    "bio": "vestibulum rutrum rutrum neque aenean auctor gravida sem praesent",
    "date": "2/14/2022",
    "sueldo": 63970
  }, {
    "id": 4,
    "name": "Jocelyn Bennit",
    "ocupacion": "Otro",
    "bio": "ipsum dolor sit amet consectetuer adipiscing elit",
    "date": "7/9/2021",
    "sueldo": 63227
  }, {
    "id": 5,
    "name": "Luci Grumley",
    "ocupacion": "Otro",
    "bio": "volutpat quam pede lobortis ligula sit amet",
    "date": "6/17/2021",
    "sueldo": 55823
  }, {
    "id": 6,
    "name": "Nora Powe",
    "ocupacion": "Otro",
    "bio": "curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit",
    "date": "1/26/2022",
    "sueldo": 19122
  }, {
    "id": 7,
    "name": "Pete Roller",
    "ocupacion": "Maestro",
    "bio": "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero",
    "date": "4/9/2022",
    "sueldo": 82907
  }, {
    "id": 8,
    "name": "Joshia Pedycan",
    "ocupacion": "Chef",
    "bio": "eleifend donec ut dolor morbi vel lectus in",
    "date": "2/22/2022",
    "sueldo": 47829
  }, {
    "id": 9,
    "name": "Juliet Trevallion",
    "ocupacion": "Chef",
    "bio": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer",
    "date": "1/20/2022",
    "sueldo": 49890
  }, {
    "id": 10,
    "name": "Caye Earey",
    "ocupacion": "Chef",
    "bio": "metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit",
    "date": "3/5/2022",
    "sueldo": 89551
  }, {
    "id": 11,
    "name": "Wally Burch",
    "ocupacion": "Maestro",
    "bio": "ultrices posuere cubilia curae donec",
    "date": "2/4/2022",
    "sueldo": 30473
  }, {
    "id": 12,
    "name": "Fremont Iannuzzelli",
    "ocupacion": "Programador",
    "bio": "at velit eu est congue elementum in hac habitasse platea dictumst morbi",
    "date": "8/29/2021",
    "sueldo": 13691
  }, {
    "id": 13,
    "name": "Haleigh Smorthit",
    "ocupacion": "Otro",
    "bio": "rutrum nulla tellus in sagittis dui vel nisl",
    "date": "12/25/2021",
    "sueldo": 51136
  }, {
    "id": 14,
    "name": "Upton Norgan",
    "ocupacion": "Programador",
    "bio": "mattis nibh ligula nec sem duis aliquam convallis",
    "date": "12/13/2021",
    "sueldo": 50888
  }, {
    "id": 15,
    "name": "Liam Mariolle",
    "ocupacion": "Otro",
    "bio": "sit amet consectetuer adipiscing elit proin interdum",
    "date": "6/23/2021",
    "sueldo": 98749
  }, {
    "id": 16,
    "name": "Corbin Kliche",
    "ocupacion": "Otro",
    "bio": "integer ac leo pellentesque ultrices mattis odio donec",
    "date": "2/13/2022",
    "sueldo": 78424
  }, {
    "id": 17,
    "name": "Jeromy Persian",
    "ocupacion": "Maestro",
    "bio": "maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque",
    "date": "3/2/2022",
    "sueldo": 40600
  }, {
    "id": 18,
    "name": "Tandi Tutchings",
    "ocupacion": "Maestro",
    "bio": "amet sem fusce consequat nulla nisl nunc nisl duis bibendum",
    "date": "7/18/2021",
    "sueldo": 59937
  }, {
    "id": 19,
    "name": "Walt Thorogood",
    "ocupacion": "Otro",
    "bio": "commodo vulputate justo in blandit ultrices enim",
    "date": "1/12/2022",
    "sueldo": 12178
  }, {
    "id": 20,
    "name": "Rachael Cloute",
    "ocupacion": "Maestro",
    "bio": "leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus",
    "date": "6/1/2021",
    "sueldo": 35979
  }, {
    "id": 21,
    "name": "Ezra Klemmt",
    "ocupacion": "Maestro",
    "bio": "placerat ante nulla justo aliquam quis turpis eget",
    "date": "12/8/2021",
    "sueldo": 76366
  }, {
    "id": 22,
    "name": "Clo Coo",
    "ocupacion": "Maestro",
    "bio": "sapien arcu sed augue aliquam erat volutpat in congue etiam",
    "date": "1/10/2022",
    "sueldo": 32404
  }, {
    "id": 23,
    "name": "Fredia Fillingham",
    "ocupacion": "Programador",
    "bio": "pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed",
    "date": "7/3/2021",
    "sueldo": 70374
  }, {
    "id": 24,
    "name": "Sande Pavlenko",
    "ocupacion": "Otro",
    "bio": "nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in",
    "date": "7/7/2021",
    "sueldo": 95144
  }, {
    "id": 25,
    "name": "Katti Goodison",
    "ocupacion": "Chef",
    "bio": "tincidunt eget tempus vel pede morbi",
    "date": "4/2/2022",
    "sueldo": 91706
  }, {
    "id": 26,
    "name": "Janey Dymocke",
    "ocupacion": "Maestro",
    "bio": "cubilia curae mauris viverra diam vitae quam suspendisse",
    "date": "10/4/2021",
    "sueldo": 13186
  }, {
    "id": 27,
    "name": "Genna Pettyfar",
    "ocupacion": "Otro",
    "bio": "nulla facilisi cras non velit nec nisi",
    "date": "1/8/2022",
    "sueldo": 55723
  }, {
    "id": 28,
    "name": "Kiah Trunks",
    "ocupacion": "Otro",
    "bio": "quis orci nullam molestie nibh in",
    "date": "7/2/2021",
    "sueldo": 46737
  }, {
    "id": 29,
    "name": "Frazer Reightley",
    "ocupacion": "Otro",
    "bio": "volutpat convallis morbi odio odio elementum eu",
    "date": "3/28/2022",
    "sueldo": 83709
  }, {
    "id": 30,
    "name": "Cesya Ainscough",
    "ocupacion": "Otro",
    "bio": "erat quisque erat eros viverra eget congue eget semper rutrum nulla",
    "date": "3/26/2022",
    "sueldo": 74201
  }, {
    "id": 31,
    "name": "Drusilla Kail",
    "ocupacion": "Otro",
    "bio": "in felis eu sapien cursus vestibulum",
    "date": "8/27/2021",
    "sueldo": 28654
  }, {
    "id": 32,
    "name": "Anatol Chattelaine",
    "ocupacion": "Chef",
    "bio": "odio in hac habitasse platea dictumst",
    "date": "12/24/2021",
    "sueldo": 51473
  }, {
    "id": 33,
    "name": "Nevins Van Der Walt",
    "ocupacion": "Maestro",
    "bio": "natoque penatibus et magnis dis parturient montes nascetur",
    "date": "1/8/2022",
    "sueldo": 89720
  }, {
    "id": 34,
    "name": "Sascha Somers",
    "ocupacion": "Programador",
    "bio": "amet sem fusce consequat nulla nisl nunc",
    "date": "2/6/2022",
    "sueldo": 85117
  }, {
    "id": 35,
    "name": "Rice Cogger",
    "ocupacion": "Chef",
    "bio": "mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis",
    "date": "1/23/2022",
    "sueldo": 87309
  }, {
    "id": 36,
    "name": "Jessey Huffadine",
    "ocupacion": "Chef",
    "bio": "morbi ut odio cras mi pede malesuada in imperdiet et commodo",
    "date": "1/17/2022",
    "sueldo": 81355
  }, {
    "id": 37,
    "name": "Warner McDavitt",
    "ocupacion": "Otro",
    "bio": "rhoncus sed vestibulum sit amet cursus id turpis",
    "date": "2/8/2022",
    "sueldo": 53503
  }, {
    "id": 38,
    "name": "Ad Churching",
    "ocupacion": "Maestro",
    "bio": "rhoncus mauris enim leo rhoncus sed vestibulum sit",
    "date": "11/14/2021",
    "sueldo": 11941
  }, {
    "id": 39,
    "name": "Lesya Sciacovelli",
    "ocupacion": "Chef",
    "bio": "sem mauris laoreet ut rhoncus",
    "date": "3/6/2022",
    "sueldo": 69885
  }, {
    "id": 40,
    "name": "Biron Wrangle",
    "ocupacion": "Maestro",
    "bio": "amet turpis elementum ligula vehicula consequat morbi a ipsum",
    "date": "2/1/2022",
    "sueldo": 42589
  }, {
    "id": 41,
    "name": "Tatiania Serck",
    "ocupacion": "Maestro",
    "bio": "elit proin interdum mauris non ligula pellentesque ultrices phasellus id sapien",
    "date": "8/18/2021",
    "sueldo": 21262
  }, {
    "id": 42,
    "name": "Constantine Kyles",
    "ocupacion": "Maestro",
    "bio": "magna vulputate luctus cum sociis",
    "date": "10/21/2021",
    "sueldo": 34663
  }, {
    "id": 43,
    "name": "Meir Tanby",
    "ocupacion": "Programador",
    "bio": "rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id",
    "date": "6/3/2021",
    "sueldo": 41673
  }, {
    "id": 44,
    "name": "Vick Richold",
    "ocupacion": "Chef",
    "bio": "ipsum primis in faucibus orci luctus",
    "date": "3/20/2022",
    "sueldo": 49070
  }, {
    "id": 45,
    "name": "Sibilla Fazackerley",
    "ocupacion": "Programador",
    "bio": "ipsum ac tellus semper interdum mauris",
    "date": "4/27/2022",
    "sueldo": 40696
  }, {
    "id": 46,
    "name": "Rozalie Rustadge",
    "ocupacion": "Programador",
    "bio": "semper porta volutpat quam pede lobortis",
    "date": "4/18/2022",
    "sueldo": 54667
  }, {
    "id": 47,
    "name": "Jordan Foyster",
    "ocupacion": "Chef",
    "bio": "nam ultrices libero non mattis",
    "date": "8/17/2021",
    "sueldo": 45458
  }, {
    "id": 48,
    "name": "Lethia Hordle",
    "ocupacion": "Chef",
    "bio": "maecenas ut massa quis augue luctus tincidunt nulla mollis molestie",
    "date": "4/30/2022",
    "sueldo": 35555
  }, {
    "id": 49,
    "name": "Shaylynn Kildahl",
    "ocupacion": "Otro",
    "bio": "tincidunt in leo maecenas pulvinar lobortis est phasellus",
    "date": "7/4/2021",
    "sueldo": 21888
  }, {
    "id": 50,
    "name": "Isabella Grutchfield",
    "ocupacion": "Chef",
    "bio": "primis in faucibus orci luctus et ultrices posuere",
    "date": "8/5/2021",
    "sueldo": 33329
  }]
  ;
 
  @ViewChild('tarjeta')
  public tarjeta: TarjetaPresentacionCardComponent = new TarjetaPresentacionCardComponent();

  public mostrarNombre(nombre: string) {
    alert("El nombres: " + nombre)
  }

  cambiarOcupacion() {
    this.ocupacion = "Maestro"
  }

  dividirPersonas() {
    this.personas.length = 2
  }

  getDataTarjeta() {
    console.log(this.tarjeta.getData());
  }

  setDataTarjeta() {
    this.tarjeta.setData("Pedro Rodriguez", "Evangelico")
    this.getDataTarjeta()
  }

  eliminar(id: number) {
    const index = this.personas.findIndex( p => p.id === id);
    this.personas.splice(index, 1)
  }

}
