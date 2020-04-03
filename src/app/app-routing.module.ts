import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './features/default-module/home/home.component';
import {EnregistrementComponent} from './features/enregistrement/enregistrement.component';
import {ConnexionComponent} from './features/connexion/connexion.component';
import { CreerUnProjetComponent } from './features/Projet/creation/creer-un-projet/creer-un-projet.component';
import {WorkflowComponent} from './features/workflow/workflow.component';
import { ProjetGestionComponent } from './features/Projet/gestion/projet-gestion/projet-gestion.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: EnregistrementComponent},
  {path: 'login', component: ConnexionComponent},
  {path: 'projet/creation', component: CreerUnProjetComponent},
  {path: 'dashboard/Workflow', component: WorkflowComponent},
  {path: 'projet/gestion', component: ProjetGestionComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
