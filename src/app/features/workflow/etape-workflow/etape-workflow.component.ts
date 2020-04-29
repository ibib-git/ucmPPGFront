import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EtapeWorkflowModel} from '../../../core/models/EtapeWorkflowModel';
import {NbToastrService} from '@nebular/theme';
import {WorkflowService} from '../../../core/services/workflow/workflow.service';
import {OrdreEtapeModel} from '../../../core/models/OrdreEtapeModel';
import {Router} from '@angular/router';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';
import {MembreProjetModel} from '../../../core/models/MembreProjetModel';
import {ProjetModel} from '../../../core/models/ProjetModel';
import {ErreurModel} from '../../../core/models/ErreurModel';

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
  
  @Output() outputProjet: EventEmitter<ProjetModel>;

  allDetails: boolean;
  estProgression: boolean;
  ordreEtape: OrdreEtapeModel;
  idUtilisateur: bigint;
  errosModel: ErreurModel;



  constructor(
      private toastrServ: NbToastrService,
      private etapeServ: WorkflowService,
      private routServ: Router
  ) {this.outputProjet = new EventEmitter<ProjetModel>(); }

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
        (projetReturn) => {
          this.toastrServ.success('Modification ordre etape ', 'Modification ordre', {[status]: 'success'});
          this.updateProjet(projetReturn);

        },
        (errorResponse) => {
          this.toastrServ.danger('Erreur du changement d ordre  ', 'Modification ordre', {[status]: 'danger'});
          this.errosModel = errorResponse.error;
          this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
        },
    );
  }

  updateProjet(projet: ProjetModel) {
    this.outputProjet.emit(projet);
  }

}
