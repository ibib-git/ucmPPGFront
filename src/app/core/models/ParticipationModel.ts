import { ProjetModel } from './ProjetModel';
import { UtilisateurModel } from './UtilisateurModel';
import { RoleModel } from './RoleModel';

export interface ParticipationModel {
    projet: ProjetModel;
    utilisateur: UtilisateurModel;
    role: RoleModel;
}
