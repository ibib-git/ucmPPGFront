import { Priorite } from '../enums/Priorite';
import { UniteDeTempsEnum } from '../enums/UniteDeTempsEnum';

export interface TacheCreationEnfantModel {

    nom: string;
    description: string;
    priorite: Priorite;
    estimation: number;
    unite: UniteDeTempsEnum;
    tacheParent: bigint;
}