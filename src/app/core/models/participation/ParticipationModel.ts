import { RoleModel } from '../role/RoleModel';
import { UtilisateurDetailsModel } from '../Utilisateur/UtilisateurDetailsModel';
import { ProjetDetailModel } from '../Projet/ProjetDetailModel';
import {ProjetModel} from '../Projet/ProjetModel';

export interface ParticipationModel {

    utilisateur: UtilisateurDetailsModel;
    projet: ProjetModel;
    role: RoleModel;
    actif: boolean;

}
