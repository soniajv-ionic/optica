import { Component } from '@angular/core';
import { Client } from '../../interfaces/client';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-clients',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-clients.component.html',
  styleUrl: './create-clients.component.css'
})
export class CreateClientsComponent {
  // Creamos un objeto cliente vacío, inicializado según la interfaz
  client: Client = {
    name: '',
    surname: '',
    email: '',
    phone: '',
    numClient: ''
  };

  // Método para manejar el envío del formulario
  onSubmit() {
    console.log('Cliente registrado:', this.client);
    // Aquí puedes hacer lo que desees con los datos (enviarlos a un backend, etc.)
    alert(`Cliente registrado: ${this.client.name} ${this.client.surname}`);
    this.resetForm();
  }

  // Método para resetear el formulario
  resetForm() {
    this.client = {
      name: '',
      surname: '',
      email: '',
      phone: '',
      numClient: ''
    };
  }
}
