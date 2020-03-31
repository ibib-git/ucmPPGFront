import { Tache } from './Tache';
import { Role } from './Role';
import { ConstrainteDAffectation } from './ContrainteDAffection';

export interface EtapeWorkflow {
    nom: string;
    description: string;
    estPrenable: boolean;
    RoleAutorisation: Role[];
    ContrainteDAffectation: ConstrainteDAffectation;
    TacheParColonne: Tache[];
}
