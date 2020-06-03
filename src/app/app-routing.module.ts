import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcceuilComponent} from './website/acceuil/acceuil.component';
import {InsciptionComponent} from './website/insciption/insciption.component';
import {LoginComponent} from './website/login/login.component';
import {NotfoundComponent} from './website/notfound/notfound.component';


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
