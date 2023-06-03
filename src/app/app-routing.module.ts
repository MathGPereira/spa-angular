import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrocaSenhaComponent } from './componentes/auxiliares-login/troca-senha/troca-senha.component';
import { CriaContaComponent } from './componentes/auxiliares-login/cria-conta/cria-conta.component';
import { LoginComponent } from './componentes/pagina-login/login/login.component';
import { HomeComponent } from './componentes/home/home/home.component';
import { PacientesComponent } from './componentes/home/pacientes/pacientes.component';
import { TarefasComponent } from './componentes/home/tarefas/tarefas.component';

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
        component: HomeComponent
    },
    {
        path: "pacientes",
        component: PacientesComponent
    },
    {
        path: "tarefas",
        component: TarefasComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
