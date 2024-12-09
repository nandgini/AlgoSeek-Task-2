import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: HomeComponent },
  { path: 'cadastro', component: HomeComponent },
  { path: 'login', component: HomeComponent },
  { path: '**', redirectTo: '' }
];