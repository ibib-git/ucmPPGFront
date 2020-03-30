import { Droit } from './Droit';

export interface Role {
    nom : string;
    droitRole : Droit[];
}