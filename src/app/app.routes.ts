import { Routes } from '@angular/router';
import { ListClientsComponent } from './components/list-clients/list-clients.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CreateClientsComponent } from './components/create-clients/create-clients.component';

export const routes: Routes = [
  { path: 'crear', component: CreateClientsComponent, pathMatch: 'full' },
  { path: 'listar', component: ListClientsComponent, pathMatch: 'full' },
  //   { path: '', redirectTo: 'crear', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];
