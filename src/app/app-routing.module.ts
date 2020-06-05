import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './website/acceuil/acceuil.component';
import {InsciptionComponent} from './website/insciption/insciption.component';
import {LoginComponent} from './website/login/login.component';
import {NotfoundComponent} from './website/notfound/notfound.component';
import {DashboardComponent} from './user/dashboard/dashboard.component';
import {DashboardAdminComponent} from './user/dashboard-admin/dashboard-admin.component';
import {ConsulterEtudiantComponent} from './user/dashboard-admin/consulter-etudiant/consulter-etudiant.component';
import {ConsulterTheseComponent} from './user/dashboard-admin/consulter-these/consulter-these.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'acceuil',
    pathMatch : 'full'
  },
  {
    path : 'acceuil',
    component : AcceuilComponent
  },
  {
    path : 'inscription',
    component : InsciptionComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'dashboardAdmin',
    component : DashboardAdminComponent
  },
  {
    path : 'dashboardAdmin/consulterEtudiant',
    component : ConsulterEtudiantComponent
  },
  {
    path : 'dashboardAdmin/consulterthese',
    component : ConsulterTheseComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : '**',
    component : NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
