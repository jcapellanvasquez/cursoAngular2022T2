import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public tienePermiso(username: string) {
    return 'Admin' === username
  }
}
