import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { InputErrorsPipe } from './_pipes/input-errors.pipe';



@NgModule({
    declarations: [InputColorPipe, InputErrorsPipe],
    exports: [
        InputColorPipe,
        InputErrorsPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
