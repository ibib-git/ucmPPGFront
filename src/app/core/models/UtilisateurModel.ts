import {ParticipationModel} from './ParticipationModel';

export interface UtilisateurModel {
    pseudo: string;
    nom: string;
    prenom: string;
    urlPhoto: string;
    mail: string;
    infoSuppl: string;
    telephone: string;
    participations: ParticipationModel[];
}
