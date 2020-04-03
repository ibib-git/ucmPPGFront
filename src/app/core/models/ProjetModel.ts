import { UtilisateurModel } from './UtilisateurModel';
import { ParticipationModel } from './ParticipationModel';
import { EtapeWorkflowModel } from './EtapeWorkflowModel';
import {MembreProjetModel} from './MembreProjetModel';
import {UtilisateurDetailsModel} from './UtilisateurDetailsModel';

export interface ProjetModel {
    nom: string;
    description: string;
    utilisateurCreateur: UtilisateurDetailsModel;
    utilisateurMembres: MembreProjetModel[];
    etapeWorkflows: EtapeWorkflowModel[];
}
