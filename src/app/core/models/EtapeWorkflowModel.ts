import { TacheModel } from './TacheModel';
import { RoleModel } from './RoleModel';
import { ConstrainteDAffectation } from '../enums/ContrainteDAffectionEnum';

export interface EtapeWorkflowModel {
    nom: string;
    description: string;
    estPrenable: boolean;
    roleAffectables: RoleModel[];
    contrainte: ConstrainteDAffectation;
    taches: TacheModel[];
}
