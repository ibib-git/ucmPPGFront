import { Pipe, PipeTransform } from '@angular/core';
import {EtapeWorkflowModel} from '../../core/models/etape/EtapeWorkflowModel';

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
