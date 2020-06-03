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

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    AcceuilComponent,
    LoginComponent,
    InsciptionComponent,
    NotfoundComponent,
    HeaderNavComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
