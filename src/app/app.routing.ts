import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormComponent } from './components/form/form.component';
import { DetailPubblicoComponent } from './components/areas/detail-pubblico/detail-pubblico.component';
import { DetailSanitarioComponent } from './components/areas/detail-sanitario/detail-sanitario.component';
import { DetailSportivoComponent } from './components/areas/detail-sportivo/detail-sportivo.component';
import { DetailProduttivoComponent } from './components/areas/detail-produttivo/detail-produttivo.component';
import { DetailPrivatoComponent } from './components/areas/detail-privato/detail-privato.component';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'settore-privato',
    component: DetailPrivatoComponent
  },
  {
    path: 'settore-pubblico',
    component: DetailPubblicoComponent
  },
  {
    path: 'settore-sanitario',
    component: DetailSanitarioComponent
  },
  {
    path: 'settore-sportivo',
    component: DetailSportivoComponent
  },
  {
    path: 'settore-produttivo',
    component: DetailProduttivoComponent
  }
  // { path: '**', component: NotFoundComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
