import { DroitModel } from './DroitModel';

export interface RoleModel {
    nom: string;
    droits: DroitModel[];
}
