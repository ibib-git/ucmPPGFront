import {UtilisateurModel} from './UtilisateurModel';
import {RoleModel} from './RoleModel';

export interface MembreProjetModel {
    utilisateur: UtilisateurModel;
    role: RoleModel;
}
