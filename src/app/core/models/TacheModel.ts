import { UniteDeTempsEnum } from '../enums/UniteDeTempsEnum';
import { HistoriqueTacheModel } from './HistoriqueTacheModel';
import { UtilisateurModel } from './UtilisateurModel';
import { Priorite } from '../enums/Priorite';

export interface TacheModel {
    id: bigint;
    nom: string;
    description: string;
    tacheEnfants: TacheModel[];
    tachesPrecedentes: TacheModel[];
    estimationTemps: number;
    uniteDeTemps: UniteDeTempsEnum;
    historique: HistoriqueTacheModel[];
    utilisateurAffecte: UtilisateurModel;
    priorite: Priorite;
}
