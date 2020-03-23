import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AffichageErreurComponent } from './features/erreurs/affichage-erreur/affichage-erreur.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErreursInterceptor } from './core/intercepteurs/erreurs.interceptor';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    AffichageErreurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    CoreModule,
    NbToastrModule.forRoot()
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ErreursInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
