import { Utilisateur } from './Utilisateur';
import { EtapeWorkflow } from './EtapeWorkflow';
import { Tache } from './Tache';

export interface HistoriqueTache {
    utilisateurTache : Utilisateur;
    etapeWorkflow : EtapeWorkflow;
    tachePrecedente : Tache;
}