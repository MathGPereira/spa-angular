import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.component.html',
  styleUrls: ['./troca-senha.component.css']
})
export class TrocaSenhaComponent {

    constructor(
        private route: Router,
        private service: ServicoService
    ) {}

    trocaSenha(form: NgForm): void {
        if(form.valid) {
            const email = document.querySelector("input[name='email']") as HTMLInputElement;
            const senha = document.querySelector("input[name='senha']") as HTMLInputElement;
            const info = {
                email: btoa(email.value),
                senha: btoa(senha.value)
            }

            this.service.trocarSenhaNoBancoDeDados(info).subscribe();
            this.route.navigate(["./login"]);
        }
    }
}
