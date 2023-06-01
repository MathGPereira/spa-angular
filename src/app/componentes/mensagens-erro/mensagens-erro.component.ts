import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagens-erro',
  templateUrl: './mensagens-erro.component.html',
  styleUrls: ['./mensagens-erro.component.css']
})
export class MensagensErroComponent {

    @Input() mensagem = "";
}
