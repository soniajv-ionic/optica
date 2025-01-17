import { Injectable } from '@angular/core';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private listClients = new Array<Client>();

  constructor() { 
    this.listClients.push({
      name: 'Juan',
      surname: 'Pérez',
      email: 'juan@gmail.com',
      phone: '123456789'
  })
  }
  
  addClient(client : Client) {
    this.listClients.push({...client});//Operador 'spread' o de propagación
    console.debug(this.listClients);
  }

  removeClient(client : Client) {
    let index = this.listClients.indexOf(client);
    this.listClients.splice(index, 1);
  }

  getClients() : Client[] {
    return this.listClients;
  }


}

function addClient(client: any, Client: any): Client {
    throw new Error('Function not implemented.');
  }
