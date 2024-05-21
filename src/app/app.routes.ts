import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ActividadesAdminComponent } from './components/actividades-admin/actividades-admin.component';
import { ActividadesEjecutorComponent } from './components/actividades-ejecutor/actividades-ejecutor.component';
//import { RegistroComponent } from './components/registro/registro.component';
export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: ActividadesAdminComponent,
  },
  {
    path: 'ejecutor',
    component: ActividadesEjecutorComponent,
  },
  //{ path: 'register', 
  //component: RegistroComponent, },
  {
    path: '**',
    redirectTo:'login'
  },
];
