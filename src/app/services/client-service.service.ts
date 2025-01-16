import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private clients = new Array<Client>();

  constructor() { }

  addClient(client : Client) {
    this.clients.push({...client});//Operador 'spread' o de propagación
    console.debug(this.clients);
  }

  removeClient(client : Client) {
    let index = this.clients.indexOf(client);
    this.clients.splice(index, 1);
  }

  getClients() : Client[] {
    return this.clients;
  }


}