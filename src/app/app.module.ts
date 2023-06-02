import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoLoginComponent } from './componentes/pagina-login/cabecalho-login/cabecalho-login.component';
import { CorpoLoginComponent } from './componentes/pagina-login/corpo-login/corpo-login.component';
import { CriaContaComponent } from './componentes/auxiliares-login/cria-conta/cria-conta.component';
import { TrocaSenhaComponent } from './componentes/auxiliares-login/troca-senha/troca-senha.component';
import { LoginComponent } from './componentes/pagina-login/login/login.component';
import { AuxiliarCabecalhoComponent } from './componentes/auxiliares-login/auxiliar-cabecalho/auxiliar-cabecalho.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { TarefasComponent } from './componentes/home/tarefas/tarefas.component';
import { PacientesComponent } from './componentes/home/pacientes/pacientes.component';
import { HomeCabecalhoComponent } from './componentes/home/home-cabecalho/home-cabecalho.component';
import { HomeRodapeComponent } from './componentes/home/home-rodape/home-rodape.component';
import { FormsModule } from '@angular/forms';
import { MensagensErroComponent } from './componentes/mensagens-erro/mensagens-erro.component';
import { MesmaSenhaDirective } from './diretivas/mesma-senha.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoLoginComponent,
    CorpoLoginComponent,
    CriaContaComponent,
    TrocaSenhaComponent,
    LoginComponent,
    AuxiliarCabecalhoComponent,
    HomeComponent,
    TarefasComponent,
    PacientesComponent,
    HomeCabecalhoComponent,
    HomeRodapeComponent,
    MensagensErroComponent,
    MesmaSenhaDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
