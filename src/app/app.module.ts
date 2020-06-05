import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { AcceuilComponent } from './website/acceuil/acceuil.component';
import { LoginComponent } from './website/login/login.component';
import { InsciptionComponent } from './website/insciption/insciption.component';
import { NotfoundComponent } from './website/notfound/notfound.component';
import { HeaderNavComponent } from './website/navigation/header-nav/header-nav.component';
import { FooterNavComponent } from './website/navigation/footer-nav/footer-nav.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import {NavbarserviceService} from './service/navbarservice.service';
import { DashNavbarComponent } from './user/dashboard/dash-navbar/dash-navbar.component';
import { DashSideComponent } from './user/dashboard/dash-side/dash-side.component';
import { DashArticleComponent } from './user/dashboard/dash-article/dash-article.component';
import { DashboardAdminComponent } from './user/dashboard-admin/dashboard-admin.component';
import { DashAdminNavComponent } from './user/dashboard-admin/dash-admin-nav/dash-admin-nav.component';
import { EspaceEtudiantComponent } from './user/dashboard-admin/espace-etudiant/espace-etudiant.component';
import { EspaceProfComponent } from './user/dashboard-admin/espace-prof/espace-prof.component';
import { EspaceAutreComponent } from './user/dashboard-admin/espace-autre/espace-autre.component';
import { ConsulterEtudiantComponent } from './user/dashboard-admin/consulter-etudiant/consulter-etudiant.component';
import { ConsulterTheseComponent } from './user/dashboard-admin/consulter-these/consulter-these.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    AcceuilComponent,
    LoginComponent,
    InsciptionComponent,
    NotfoundComponent,
    HeaderNavComponent,
    FooterNavComponent,
    DashboardComponent,
    DashNavbarComponent,
    DashSideComponent,
    DashArticleComponent,
    DashboardAdminComponent,
    DashAdminNavComponent,
    EspaceEtudiantComponent,
    EspaceProfComponent,
    EspaceAutreComponent,
    ConsulterEtudiantComponent,
    ConsulterTheseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    NavbarserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
