import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {NbButtonModule, NbInputModule} from '@nebular/theme';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        NbButtonModule,
        RouterModule,
        NbInputModule
    ]
})
export class DefaultModuleModule { }
