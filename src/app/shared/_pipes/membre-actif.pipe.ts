import { Pipe, PipeTransform } from '@angular/core';
import {ParticipationModel} from '../../core/models/participation/ParticipationModel';
import {MembreProjetModel} from '../../core/models/Projet/MembreProjetModel';

@Pipe({
  name: 'membreActif'
})
export class MembreActifPipe implements PipeTransform {

  transform(participations: MembreProjetModel[]): MembreProjetModel[] {
    if (!participations) {
    } else {
      return participations.filter(p => p.actif) ;
    }
  }

}
