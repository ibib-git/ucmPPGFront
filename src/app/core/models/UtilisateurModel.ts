import { ParticipationDetailModel } from './ParticipationDetailModel';
import {ParticipationModel} from './ParticipationModel';

export interface UtilisateurModel {

    id: bigint;
    motDePasse: string;
    mail: string;
    nom: string;
    prenom: string;
    pseudo: string;
    telephone: string;
    infoSuppl: string;
    urlPhoto: string;
    participations: ParticipationModel[];
}
