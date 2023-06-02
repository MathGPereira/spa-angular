import { Component } from '@angular/core';
import { NgForm } from "@angular/forms"

@Component({
  selector: 'app-corpo-login',
  templateUrl: './corpo-login.component.html',
  styleUrls: ['./corpo-login.component.css']
})
export class CorpoLoginComponent {

    logar(form: NgForm): void {
        if(form.valid) {
            console.log("Você está logado");
        }else {
            console.log("Login inválido!");
        }
    }
}
