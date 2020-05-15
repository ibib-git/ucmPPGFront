import { UtilisateurModel } from '../Utilisateur/UtilisateurModel';
import { EtapeWorkflowModel } from '../etape/EtapeWorkflowModel';
import { TacheModel } from '../tache/TacheModel';

export interface HistoriqueTacheModel {
    utilisateur: UtilisateurModel;
    etapeWorkflow: EtapeWorkflowModel;
    tache: TacheModel;
}
