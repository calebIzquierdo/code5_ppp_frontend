import { Routes } from '@angular/router';
import { MainLayoutComponent } from './components/layouts/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { EmpresaComponent } from './pages/empresa/empresa.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      { 
        path: 'home', 
        component: HomeComponent 
      },
      {
        path: 'empresa',
        component: EmpresaComponent
      }
    ]
  }
];
