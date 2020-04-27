import { RoleModel } from './RoleModel';
import { UtilisateurDetailsModel } from './UtilisateurDetailsModel';
import { ProjetDetailModel } from './ProjetDetailModel';

export interface ParticipationModel {
    
    utilisateur: UtilisateurDetailsModel;
    projet: ProjetDetailModel;
    role: RoleModel;
    isActif: boolean;

}
