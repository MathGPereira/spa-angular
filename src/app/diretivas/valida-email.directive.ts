import { Directive } from '@angular/core';
import { NG_ASYNC_VALIDATORS, AsyncValidator, AbstractControl, ValidationErrors } from "@angular/forms"
import { Observable, map } from 'rxjs';
import { ServicoService } from '../service/servico.service';

@Directive({
  selector: '[validaEmail]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: ValidaEmailDirective,
    multi: true,

  }]
})
export class ValidaEmailDirective implements AsyncValidator {

  constructor(private service: ServicoService) { }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email: string = btoa(control.value);

    return this.service.pegaInformacoesNoBancoDeDados(email).pipe(map(
        (resultado: any) => resultado.erro ? {"validaEmail": true}: null
    ));
  }

}
