import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/default-module/home/home.component';
import { EnregistrementComponent } from './features/Utilisateur/enregistrement/enregistrement.component';
import { ConnexionComponent } from './features/Utilisateur/connexion/connexion.component';
import { CreerUnProjetComponent } from './features/Projet/creation/creer-un-projet/creer-un-projet.component';
import { WorkflowComponent } from './features/workflow/workflow.component';
import { ProjetGestionComponent } from './features/Projet/gestion/projet-gestion/projet-gestion.component';
import { UtilisateurInterfaceComponent } from './features/Utilisateur/utilisateur-interface/utilisateur-interface.component';
import { AjouterTacheComponent } from './features/Tache/ajouter-tache/ajouter-tache.component';
import { TacheEnfantComponent } from './features/Tache/tache-enfant/tache-enfant.component';
import { SupprimerTacheComponent } from './features/Tache/supprimer-tache/supprimer-tache.component';
import {AuthentificationGuard} from './core/guards/authentification/authentification.guard';
import {NoAuthentificationGuard} from './core/guards/noAuthentificatrion/no-authentification.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: EnregistrementComponent, canActivate: [NoAuthentificationGuard]},
  {path: 'login', component: ConnexionComponent, canActivate : [NoAuthentificationGuard]},
  {path: 'tache/:idprojet/:idWorkflow/creationTache', component: AjouterTacheComponent},
  {path: 'tache/:idprojet/:idWorkflow/:idTache/creationEnfant', component: TacheEnfantComponent},
  {path: 'tache/:idProjet/:idTache/supprimer', component: SupprimerTacheComponent},
  {path: 'projet/creation', component: CreerUnProjetComponent, canActivate: [AuthentificationGuard]},
  {path: 'dashboard/Workflow/:id', component: WorkflowComponent, canActivate: [AuthentificationGuard]},
  {path: 'projet/gestion/:id', component: ProjetGestionComponent, canActivate: [AuthentificationGuard]},
  {path: 'utilisateur', component: UtilisateurInterfaceComponent, canActivate: [AuthentificationGuard]},
  // dans tous les autres cas revoit vers home (doit être en dernière route)
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
