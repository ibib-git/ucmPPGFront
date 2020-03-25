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
  NbInputModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RegisterComponent } from './features/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoreModule} from './core/core.module';
import {DefaultModuleModule} from './features/default-module/default-module.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import { LoginComponent } from './features/login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErreursInterceptor } from './core/intercepteurs/erreurs.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent
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
