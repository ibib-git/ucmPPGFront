import { TacheModel } from '../tache/TacheModel';
import { RoleModel } from '../role/RoleModel';
import { ConstrainteDAffectation } from '../../enums/ContrainteDAffectionEnum';

export interface EtapeWorkflowModel {
    id: bigint;
    nom: string;
    description: string;
    estPrenable: boolean;
    numOrdre: number;
    roleAffectables: RoleModel[];
    contrainte: ConstrainteDAffectation;
    taches: TacheModel[];

}
