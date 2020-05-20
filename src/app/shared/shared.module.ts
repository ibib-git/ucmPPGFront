import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputColorPipe } from './_pipes/input-color.pipe';
import { InputErrorsPipe } from './_pipes/input-errors.pipe';
import { OrdreEtapePipe } from './_pipes/ordre-etape.pipe';
import { ParticipationActifPipe } from './_pipes/participation-actif.pipe';
import { MembreActifPipe } from './_pipes/membre-actif.pipe';



@NgModule({
    declarations: [InputColorPipe, InputErrorsPipe, OrdreEtapePipe, ParticipationActifPipe, MembreActifPipe],
    exports: [
        InputColorPipe,
        InputErrorsPipe,
        OrdreEtapePipe,
        ParticipationActifPipe,
        MembreActifPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
