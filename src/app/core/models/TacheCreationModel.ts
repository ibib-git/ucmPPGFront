import { Priorite } from '../enums/Priorite';
import { UniteDeTempsEnum } from '../enums/UniteDeTempsEnum';

export interface TacheCreationModel {
    
    nom: string;
    description: string;
    priorite: Priorite;
    estimation: number;
    unite: UniteDeTempsEnum;
}