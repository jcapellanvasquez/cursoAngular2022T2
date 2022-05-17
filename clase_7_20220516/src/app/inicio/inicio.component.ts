import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public posts: Post[] = [];
  constructor(public clienteSrv: ClienteService) { }

  ngOnInit(): void {
  }

  public getPosts() {
    this.clienteSrv.getPost().subscribe( data => {
      this.posts = data
    })
  }
}
