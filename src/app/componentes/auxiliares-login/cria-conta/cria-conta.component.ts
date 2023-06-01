import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cria-conta',
  templateUrl: './cria-conta.component.html',
  styleUrls: ['./cria-conta.component.css']
})
export class CriaContaComponent implements OnInit {

    constructor(private route: Router) {

    }

    ngOnInit(): void {

    }

    cadastrar(form: NgForm): void {
        if(form.valid) {
            this.route.navigate(["/login"]);
        }else {
            console.log(form.control);
        }
    }

}
