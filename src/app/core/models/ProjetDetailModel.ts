import {UtilisateurDetailsModel} from './UtilisateurDetailsModel';

export interface ProjetDetailModel {
    id: bigint;
    nom: string;
    description: string;
    utilisateurCreateur: UtilisateurDetailsModel;
}