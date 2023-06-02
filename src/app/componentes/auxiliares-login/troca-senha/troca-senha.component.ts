import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-troca-senha',
  templateUrl: './troca-senha.component.html',
  styleUrls: ['./troca-senha.component.css']
})
export class TrocaSenhaComponent {

    constructor(private route: Router) {}

    trocaSenha(form: NgForm): void {
        if(form.valid) {
            this.route.navigate(["./login"]);
        }
    }
}
