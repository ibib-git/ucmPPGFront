import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { InputErrorsPipe } from './_pipes/input-errors.pipe';
import { OrdreEtapePipe } from './_pipes/ordre-etape.pipe';
import { ParticipationActifPipe } from './_pipes/participation-actif.pipe';



@NgModule({
    declarations: [InputColorPipe, InputErrorsPipe, OrdreEtapePipe, ParticipationActifPipe],
    exports: [
        InputColorPipe,
        InputErrorsPipe,
        OrdreEtapePipe,
        ParticipationActifPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
