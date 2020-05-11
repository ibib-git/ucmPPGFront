import { RoleModel } from './RoleModel';
import { UtilisateurDetailsModel } from './UtilisateurDetailsModel';
import { ProjetDetailModel } from './ProjetDetailModel';
import {ProjetModel} from './ProjetModel';

export interface ParticipationModel {

    utilisateur: UtilisateurDetailsModel;
    projet: ProjetModel;
    role: RoleModel;
    actif: boolean;

}
