import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router } from '@angular/router';
import { ServicoService } from 'src/app/service/servico.service';

@Component({
  selector: 'app-corpo-login',
  templateUrl: './corpo-login.component.html',
  styleUrls: ['./corpo-login.component.css']
})
export class CorpoLoginComponent {

    constructor(
        private service: ServicoService,
        private route: Router
    ) {}

    logar(form: NgForm): void {
        if(form.valid) {
            const email = <HTMLInputElement>document.querySelector("input[name='email']");
            const senha = <HTMLInputElement>document.querySelector("input[name='senha']");
            const info = {
                email: btoa(email.value),
                senha: btoa(senha.value)
            }

            this.service.validaLogin(info).subscribe(resposta => {
                if(JSON.parse(JSON.stringify(resposta)).status) {
                    this.route.navigate(["/home"]);
                }
            })

        }
    }
}
