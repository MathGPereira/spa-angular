import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoLoginComponent } from './componentes/pagina-login/cabecalho-login/cabecalho-login.component';
import { CorpoLoginComponent } from './componentes/pagina-login/corpo-login/corpo-login.component';
import { CriaContaComponent } from './componentes/auxiliares-login/cria-conta/cria-conta.component';
import { TrocaSenhaComponent } from './componentes/auxiliares-login/troca-senha/troca-senha.component';
import { LoginComponent } from './componentes/pagina-login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoLoginComponent,
    CorpoLoginComponent,
    CriaContaComponent,
    TrocaSenhaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
