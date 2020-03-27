import { Utilisateur } from './Utilisateur';
import { Participation } from './Participation';
import { EtapeWorkflow } from './EtapeWorkflow';

export interface Projet {
    nom : string;
    description : string;
    createurDuProjet : Utilisateur;
    participationAuProjet : Participation[];
    etapeWorkflow : EtapeWorkflow;
}