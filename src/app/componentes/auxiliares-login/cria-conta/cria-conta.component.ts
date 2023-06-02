import { Component} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.component.html',
  styleUrls: ['./cria-conta.component.css']
})
export class CriaContaComponent {

    constructor(
        private route: Router,
        private service: ServicoService
    ) {}

    cadastrar(form: NgForm): void {
       if(form.valid) {
            const nome = document.querySelector("input[name='nome']") as HTMLInputElement;
            const sobrenome = document.querySelector("input[name='sobrenome']") as HTMLInputElement;
            const email = document.querySelector("input[name='email']") as HTMLInputElement;
            const senha = document.querySelector("input[name='senha']") as HTMLInputElement;
            const usuario: Usuario = {
                nome: nome.value,
                sobrenome: sobrenome.value,
                email: email.value,
                senha: senha.value
            }

            this.service.cadastrarNoBancoDeDados(usuario);
            this.route.navigate(["/login"]);
        }
    }

}
