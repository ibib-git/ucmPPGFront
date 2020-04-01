import { UtilisateurModel } from './UtilisateurModel';
import { EtapeWorkflowModel } from './EtapeWorkflowModel';
import { TacheModel } from './TacheModel';

export interface HistoriqueTacheModel {
    utilisateur: UtilisateurModel;
    etapeWorkflow: EtapeWorkflowModel;
    tache: TacheModel;
}
