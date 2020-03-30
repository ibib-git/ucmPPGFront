import { Projet } from './Projet';
import { Utilisateur } from './Utilisateur';
import { Role } from './Role';

export interface Participation {
    projetParticiper : Projet;
    utilisateurParticpant : Utilisateur;
    roleParticipant : Role;
}