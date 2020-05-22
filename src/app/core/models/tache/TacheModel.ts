import { UniteDeTempsEnum } from '../../enums/UniteDeTempsEnum';
import { HistoriqueTacheModel } from '../historique/HistoriqueTacheModel';
import { UtilisateurModel } from '../Utilisateur/UtilisateurModel';
import {UtilisateurDetailsModel} from '../Utilisateur/UtilisateurDetailsModel';
import {Priorite} from '../../enums/Priorite';

export interface TacheModel {
    id: bigint;
    nom: string;
    description: string;
    tacheEnfants: TacheModel[];
    tachesPrecedentes: TacheModel[];
    estimationTemps: number;
    uniteDeTemps: UniteDeTempsEnum;
    historique: HistoriqueTacheModel[];
    utilisateurAffecte: UtilisateurDetailsModel;
    priorite: Priorite;
}
