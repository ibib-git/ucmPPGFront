import { Priorite } from '../enums/Priorite';
import { UniteDeTempsEnum } from '../enums/UniteDeTempsEnum';

export interface TacheCreationModel {
    
    nom: string;
    description: string;
    priorite: string;
    estimation: number;
    unite: number;
}