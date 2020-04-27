import { Pipe, PipeTransform } from '@angular/core';
import {EtapeWorkflowModel} from '../../core/models/EtapeWorkflowModel';
import {compareNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Pipe({
  name: 'ordreEtape'
})
export class OrdreEtapePipe implements PipeTransform {

  transform(etapesOrd: EtapeWorkflowModel[]): EtapeWorkflowModel[] {

    return etapesOrd.sort(function(a, b) {
      return a.numOrdre - b.numOrdre;
    });
  }

}
