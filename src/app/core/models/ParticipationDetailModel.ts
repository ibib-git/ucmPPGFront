import { UtilisateurDetailsModel } from './UtilisateurDetailsModel';
import { ProjetDetailModel } from './ProjetDetailModel';
import { RoleModel } from './RoleModel';

export interface ParticipationDetailModel {
    utilisateur: UtilisateurDetailsModel;
    projet: ProjetDetailModel;
    role: RoleModel;
}