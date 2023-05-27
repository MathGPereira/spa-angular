import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrocaSenhaComponent } from './componentes/auxiliares-login/troca-senha/troca-senha.component';
import { CriaContaComponent } from './componentes/auxiliares-login/cria-conta/cria-conta.component';
import { LoginComponent } from './componentes/pagina-login/login/login.component';
import { HomeCabecalhoComponent } from './componentes/home/home-cabecalho/home-cabecalho.component';

const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "esqueciSenha",
        component: TrocaSenhaComponent
    },
    {
        path: "criaConta",
        component: CriaContaComponent
    },
    {
        path: "home",
        component: HomeCabecalhoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
