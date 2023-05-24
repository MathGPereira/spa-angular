import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoLoginComponent } from './componentes/pagina-login/cabecalho-login/cabecalho-login.component';
import { CorpoLoginComponent } from './componentes/pagina-login/corpo-login/corpo-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoLoginComponent,
    CorpoLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
