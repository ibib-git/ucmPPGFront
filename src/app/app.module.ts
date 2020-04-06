import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbCardModule,
    NbToastrModule,
    NbButtonModule,
    NbInputModule, NbProgressBarModule, NbIconModule, NbCheckboxModule, NbToggleModule,NbSelectModule, NbListModule, NbSidebarModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { EnregistrementComponent } from './features/enregistrement/enregistrement.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {DefaultModuleModule} from './features/default-module/default-module.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { ConnexionComponent } from './features/connexion/connexion.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErreursInterceptor } from './core/intercepteurs/erreurs.interceptor';
import { CreerUnProjetComponent } from './features/Projet/creation/creer-un-projet/creer-un-projet.component';
import { WorkflowComponent } from './features/workflow/workflow.component';
import { EtapeWorkflowComponent } from './features/workflow/etape-workflow/etape-workflow.component';
import { TacheEtapeWorkflowComponent } from './features/workflow/etape-workflow/tache-etape-workflow/tache-etape-workflow.component';
import {ProjetGestionComponent} from './features/Projet/gestion/projet-gestion/projet-gestion.component';
import { UtilisateurInterfaceComponent } from './features/Utilisateur/utilisateur-interface/utilisateur-interface.component';
import { ProjetUtilisateurComponent } from './features/Utilisateur/utilisateur-interface/nav-barre/projet-utilisateur/projet-utilisateur.component';


@NgModule({
  declarations: [
    AppComponent,
    EnregistrementComponent,
    ConnexionComponent,
    CreerUnProjetComponent,
    WorkflowComponent,
    EtapeWorkflowComponent,
    TacheEtapeWorkflowComponent,
      ProjetGestionComponent,
      UtilisateurInterfaceComponent,
      ProjetUtilisateurComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'cosmic'}),
        NbLayoutModule,
        NbEvaIconsModule,
        FormsModule,
        NbToastrModule.forRoot(),
        NbCardModule,
        NbInputModule,
        HttpClientModule,
        NbButtonModule,
        RouterModule,
        ReactiveFormsModule,
        CoreModule,
        DefaultModuleModule,
        SharedModule,
        NbProgressBarModule,
        NbIconModule,
        NbCheckboxModule,
        NbToggleModule,
        NbSelectModule,
        NbListModule,
        NbSidebarModule
    ],

  providers: [
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ErreursInterceptor,
      multi: true
    }*/
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
