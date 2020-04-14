import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { InputErrorsPipe } from './_pipes/input-errors.pipe';
import { OrdreEtapePipe } from './_pipes/ordre-etape.pipe';



@NgModule({
    declarations: [InputColorPipe, InputErrorsPipe, OrdreEtapePipe],
    exports: [
        InputColorPipe,
        InputErrorsPipe,
        OrdreEtapePipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
