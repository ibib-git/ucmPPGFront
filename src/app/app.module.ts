import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule,NbLayoutModule,NbCardModule,NbToastrModule,NbButtonModule,NbInputModule,NbSelectModule, NbListModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RegisterComponent } from './features/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {DefaultModuleModule} from './features/default-module/default-module.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { LoginComponent } from './features/login/login.component';
import { CreerUnProjetComponent } from './features/Projet/creation/creer-un-projet/creer-un-projet.component';
import { ProjetGestionComponent } from './features/Projet/gestion/projet-gestion/projet-gestion.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    CreerUnProjetComponent,
    ProjetGestionComponent,
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
        NbSelectModule,
        NbListModule
    ],

  providers: [
   /* {
      provide: HTTP_INTERCEPTORS,
      useClass: ErreursInterceptor,
      multi: true
      Bob moranne
    }*/
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
