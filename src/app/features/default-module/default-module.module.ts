import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {NbActionsModule, NbButtonModule, NbDialogModule, NbIconModule, NbInputModule, NbMenuModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import {config} from 'rxjs';



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
        NbDialogModule,
        NbMenuModule
    ]
})
export class DefaultModuleModule { }
