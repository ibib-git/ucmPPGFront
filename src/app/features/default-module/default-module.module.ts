import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {NbActionsModule, NbButtonModule, NbIconModule, NbInputModule, NbMenuModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';



@NgModule({
    declarations: [HomeComponent, HomeNavbarComponent],
    exports: [
        HomeNavbarComponent
    ],
    imports: [
        CommonModule,
        NbButtonModule,
        RouterModule,
        NbInputModule,
        NbIconModule,
        NbActionsModule,
        NbMenuModule
    ]
})
export class DefaultModuleModule { }
