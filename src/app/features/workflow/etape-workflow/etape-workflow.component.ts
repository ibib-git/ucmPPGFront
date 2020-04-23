import {Component, Input, OnInit} from '@angular/core';
import {EtapeWorkflowModel} from '../../../core/models/EtapeWorkflowModel';
import {NbToastrService} from '@nebular/theme';
import {WorkflowService} from '../../../core/services/workflow/workflow.service';
import {OrdreEtapeModel} from '../../../core/models/OrdreEtapeModel';
import {Router} from '@angular/router';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';
import {MembreProjetModel} from '../../../core/models/MembreProjetModel';

@Component({
  selector: 'app-etape-workflow',
  templateUrl: './etape-workflow.component.html',
  styleUrls: ['./etape-workflow.component.scss']
})
export class EtapeWorkflowComponent implements OnInit {
  @Input() etape: EtapeWorkflowModel;
  @Input() membreProjet: MembreProjetModel[];
  @Input() idEtapeSuivante: bigint;
  @Input() idDerniereEtape: bigint;

  allDetails: boolean;
  estProgression: boolean;
  ordreEtape: OrdreEtapeModel;
  idUtilisateur: bigint;


  constructor(
      private toastrServ: NbToastrService,
      private etapeServ: WorkflowService,
      private routServ: Router
  ) { }

  ngOnInit(): void {
    this.estProgression = true;
    this.allDetails = false;
    this.ordreEtape = {} as OrdreEtapeModel;
    // TODO Damien : a remplacer avec l id user du token
    // @ts-ignore
    this.idUtilisateur = 1;
    this.ordreEtape.idUtilisateur = this.idUtilisateur;
    this.ordreEtape.nvOrdre = 1;

  }

  toggle(checked: boolean) {
    this.estProgression = checked;
  }

  clickAllDetails(clicked: boolean) {
    this.allDetails = clicked;
  }

  dragOrdre(etapeModel: EtapeWorkflowModel, i: number) {
    this.ordreEtape.nvOrdre = this.etape.numOrdre + i;
    this.etapeServ.changerOrdreEtape(etapeModel.id, this.ordreEtape).subscribe(
        (model) => {
          this.toastrServ.success('Modification ordre etape ', 'Modification ordre', {[status]: 'success'});
          this.routServ.navigateByUrl('dashboard/Workflow');
        },
        (errorResponse) => {
          this.toastrServ.danger('Erreur du changement d ordre  ', 'Modification ordre', {[status]: 'danger'});
        },
        () => {
        }
    );
  }

}
