import { AbstractControl, ValidatorFn } from '@angular/forms';

export function validarNumeroMenor20(): ValidatorFn {
    return (control: AbstractControl) => {
        const valor = <number>control.value;
        if (!valor) return;
        //if (valor.length === undefined) return;

        if (valor>20){
            return {
                validarNumeroMenor20: {
                    mensaje: 'la nota debe ser <= 20'
                }
            };
        }

        return;
    }
}