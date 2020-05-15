import { EtapeWorkflowModel } from '../etape/EtapeWorkflowModel';
import {MembreProjetModel} from './MembreProjetModel';
import {UtilisateurDetailsModel} from '../Utilisateur/UtilisateurDetailsModel';
import { RoleModel } from '../role/RoleModel';

export interface ProjetModel {
    id: bigint;
    nom: string;
    description: string;
    createurUtilisateur: UtilisateurDetailsModel;
    utilisateurMembres: MembreProjetModel[];
    etapeWorkflows: EtapeWorkflowModel[];
    roles: RoleModel[];
}
