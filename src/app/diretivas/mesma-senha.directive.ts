import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms"

@Directive({
  selector: '[mesmaSenhaValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MesmaSenhaDirective,
    multi: true
  }]
})
export class MesmaSenhaDirective implements Validator {

    constructor() { }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const senha = <HTMLInputElement>document.querySelector("[data-senha]");
        const confirmaSenha = control.value

        return senha.value === confirmaSenha ? null : {"mesmaSenhaValidator": true}
    }
}
