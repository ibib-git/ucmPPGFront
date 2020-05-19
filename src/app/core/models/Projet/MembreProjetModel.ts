import {RoleModel} from '../role/RoleModel';
import { UtilisateurDetailsModel } from '../Utilisateur/UtilisateurDetailsModel';

export interface MembreProjetModel {
    utilisateur: UtilisateurDetailsModel;
    role: RoleModel;
    actif: boolean;
}
