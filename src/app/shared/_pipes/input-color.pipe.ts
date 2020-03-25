import { Pipe, PipeTransform } from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Pipe({
  name: 'inputColor',
  pure : false
})
export class InputColorPipe implements PipeTransform {

  transform(value: AbstractControl, ...args: any[]): string {
    if (value.dirty || value.touched) {
      if (value.valid) {
        return 'success';
      } else { return 'danger'; }
    } else {
      return 'primary';
    }
  }

}
