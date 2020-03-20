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
import {CoreModuleModule} from './core/core-module/core-module.module';
import {DefaultModuleModule} from './features/default-module/default-module.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
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
      CoreModuleModule,
      DefaultModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
