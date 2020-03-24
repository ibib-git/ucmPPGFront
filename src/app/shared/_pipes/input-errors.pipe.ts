import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl, MinLengthValidator} from '@angular/forms';

@Pipe({
  name: 'inputErrors',
  pure: false,
})
export class InputErrorsPipe implements PipeTransform {

  messageError: string;

  transform(value: AbstractControl, ...args: any[]): string {

        if (value.getError('required')) {
          return 'Ce champs est obligatoire';
        }
        if (value.getError('email')) {
            return'Entrez une adresse mail correcte';
        }
        if (value.getError('maxlength')) {
            return 'Entrez une valeur de moins de ' + value.validator.length + 'caractères'; //TODO Damien :  récuperer la valeur
        }
        if (value.getError('minlength')) {
            return 'Entrez une valeur de minimum' + value.validator.name + 'caractères';
        }
        if (value.getError('pattern')) {
            return 'Merci de respecter le format imposé';
        }

  }
}
