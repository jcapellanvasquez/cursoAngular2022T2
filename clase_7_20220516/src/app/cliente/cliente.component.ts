import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(public clienteSrv: ClienteService) { }

  ngOnInit(): void {
    console.log(this.clienteSrv.getClientes())
  }

  agregarCliente() {
    let cliente: Cliente = {
      id: 1,
      name: 'Jose el cliente',
      email: 'jose_cliente@gmail.com'
    }
    this.clienteSrv.setCliente(cliente);
  }

}
