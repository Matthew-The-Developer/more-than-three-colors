import { Routes } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: '**', redirectTo: '/buttons' }
];
