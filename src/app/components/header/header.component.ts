import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit, OnDestroy {
  currentTime: string = '';
  private intervalId: any;

  ngOnInit(): void {
    this.updateClock();
    this.intervalId = setInterval(() => this.updateClock(), 1000); // Actualiza el reloj cada segundo
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Limpiar el intervalo al destruir el componente
  }

  updateClock(): void {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); // Formato de hora local
  }
}