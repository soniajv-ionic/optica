import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientService } from '../../services/client-service.service';


@Component({
  selector: 'app-list-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-clients.component.html',
  styleUrl: './list-clients.component.css'
})
export class ListClientsComponent {
  clientService = inject(ClientService);
}
