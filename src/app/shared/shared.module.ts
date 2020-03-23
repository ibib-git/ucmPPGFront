import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { InputsErrorsComponent } from './_components/inputs-errors/inputs-errors.component';



@NgModule({
    declarations: [InputColorPipe, InputsErrorsComponent],
    exports: [
        InputColorPipe,
        InputsErrorsComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
