import { UniteDeTemps } from './UniteDeTemps';
import { HistoriqueTache } from './HistoriqueTache';
import { Utilisateur } from './Utilisateur';

export interface Tache {
    nom : string;
    description_tache : string;
    taches_enfants : Tache[];
    taches_precedente : Tache[];
    estimation_temps : number;
    uniteDetemps : UniteDeTemps;
    historique : HistoriqueTache[];
    utilisateurDeTache : Utilisateur;
}