import { UtilisateurDetailsModel } from '../Utilisateur/UtilisateurDetailsModel';
import { ProjetDetailModel } from '../Projet/ProjetDetailModel';
import { RoleModel } from '../role/RoleModel';

export interface ParticipationDetailModel {
    utilisateur: UtilisateurDetailsModel;
    projet: ProjetDetailModel;
    role: RoleModel;
    isActif: boolean;
}
