import { UniteDeTempsEnum } from '../enums/UniteDeTempsEnum';
import { HistoriqueTacheModel } from './HistoriqueTacheModel';
import { UtilisateurModel } from './UtilisateurModel';
import {UtilisateurDetailsModel} from './UtilisateurDetailsModel';

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
}
