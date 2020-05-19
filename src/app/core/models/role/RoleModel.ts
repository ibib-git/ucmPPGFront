import { DroitModel } from '../droits/DroitModel';

export interface RoleModel {
    nom: string;
    droits: DroitModel[];
}
