import { ParticipationDetailModel } from '../participation/ParticipationDetailModel';
import {ParticipationModel} from '../participation/ParticipationModel';

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
