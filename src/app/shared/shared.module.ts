import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';



@NgModule({
    declarations: [InputColorPipe],
    exports: [
        InputColorPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
