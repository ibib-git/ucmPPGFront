import { EtapeWorkflowModel } from './EtapeWorkflowModel';
import {MembreProjetModel} from './MembreProjetModel';
import {UtilisateurDetailsModel} from './UtilisateurDetailsModel';
import { RoleModel } from './RoleModel';

export interface ProjetModel {
    
    nom: string;
    description: string;
    utilisateurCreateur: UtilisateurDetailsModel;
    utilisateurMembres: MembreProjetModel[];
    etapeWorkflows: EtapeWorkflowModel[];
    role: RoleModel[];
}
