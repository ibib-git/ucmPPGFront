import { TacheModel } from './TacheModel';
import { RoleModel } from './RoleModel';
import { ConstrainteDAffectation } from '../enums/ContrainteDAffectionEnum';

export interface EtapeWorkflowModel {
    nom: string;
    description: string;
    estPrenable: boolean;
    numOrdre: number;
    roleAffectables: RoleModel[];
    contrainte: ConstrainteDAffectation;
    taches: TacheModel[];
}
