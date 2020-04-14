import {RoleModel} from './RoleModel';
import { UtilisateurDetailsModel } from './UtilisateurDetailsModel';

export interface MembreProjetModel {
    utilisateur: UtilisateurDetailsModel;
    role: RoleModel;
}
