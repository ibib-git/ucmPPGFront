import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl} from '@angular/forms';

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
            return 'Entrez une valeur de moins de ' + value.getError('maxlength').requiredLength + ' caractères';
        }
        if (value.getError('minlength')) {
            return 'Entrez une valeur de minimum ' + value.getError('minlength').requiredLength  + ' caractères';
        }
        if (value.getError('pattern')) { // TODO Damien : revoir la manière d'identifier le champs en erreur car c'est moche
            if (value.getError('pattern').requiredPattern === '^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$') {
                return 'Un mot de passe doit contenir au min 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère special (!@#$%^&*) ';
            }

            if (value.getError('pattern').requiredPattern === '^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[0-9]*$') {
                return 'Entrez un numero de téléphone correct';
            }
        }

        if (value.getError('matchError')) {
          return 'Les 2 mots de passe doivent correspondre';
      }

  }
}
