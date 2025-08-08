import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { PracticasComponent } from './pages/practica/practica.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'practicantes', component: PracticasComponent } // ✅ Aquí agregas la ruta
    ]
  }
];
