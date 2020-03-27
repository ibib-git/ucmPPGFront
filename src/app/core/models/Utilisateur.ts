import { Participation } from './Participation';

export interface Utilisateur {
    pseudo : string;
    nom : string;
    prenom : string;
    urlPhoto : string;
    motDePasse : string;
    Email : string;
    information_supplementaire : string;
    projetParticiper : Participation[]
}