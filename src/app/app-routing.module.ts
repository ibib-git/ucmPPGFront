import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/default-module/home/home.component';
import {EnregistrementComponent} from './features/enregistrement/enregistrement.component';
import {ConnexionComponent} from './features/connexion/connexion.component';
import { CreerUnProjetComponent } from './features/Projet/creation/creer-un-projet/creer-un-projet.component';
import {WorkflowComponent} from './features/workflow/workflow.component';
import { ProjetGestionComponent } from './features/Projet/gestion/projet-gestion/projet-gestion.component';
import { UtilisateurInterfaceComponent } from './features/Utilisateur/utilisateur-interface/utilisateur-interface.component';
import {AuthentificationGuard} from './core/guards/authentification.guard';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: EnregistrementComponent},
  {path: 'login', component: ConnexionComponent},
  {path: 'projet/creation', component: CreerUnProjetComponent, canActivate: [AuthentificationGuard]},
  {path: 'dashboard/Workflow/:id', component: WorkflowComponent, canActivate: [AuthentificationGuard]},
  {path: 'projet/gestion/:id', component: ProjetGestionComponent, canActivate: [AuthentificationGuard]},
  {path: 'utilisateur/:id', component: UtilisateurInterfaceComponent, canActivate: [AuthentificationGuard]},

  // dans tous les autres cas revoit vers home (doit être en dernière route)
  {path: '**', redirectTo: '/home', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
