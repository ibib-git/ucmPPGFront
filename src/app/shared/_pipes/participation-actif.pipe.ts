import { Pipe, PipeTransform } from '@angular/core';
import {ParticipationModel} from '../../core/models/participation/ParticipationModel';

@Pipe({
  name: 'participationActif',
  pure: false
})
export class ParticipationActifPipe implements PipeTransform {

  transform(participations: ParticipationModel[]): ParticipationModel[] {
    if (!participations) {
    } else {
      return participations.filter(p => p.actif) ;
    }
  }

}
