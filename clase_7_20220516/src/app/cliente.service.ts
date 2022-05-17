import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './models/clientes';
import { Post } from './models/post';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private clientes: Cliente[] = [];
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.clientes;
  }

  setCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  getPost() {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Post[]>(url)
  }
}
