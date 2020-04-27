import { Pipe, PipeTransform } from '@angular/core';
import {EtapeWorkflowModel} from '../../core/models/EtapeWorkflowModel';

@Pipe({
  name: 'ordreEtape'
})
export class OrdreEtapePipe implements PipeTransform {

  transform(etapesOrd: EtapeWorkflowModel[]): unknown {

    return etapesOrd.sort(function(a,b) {
      return a.numOrdre - b.numOrdre;
    });
  }

}
