import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjetModel} from '../../core/models/ProjetModel';
import { RecuperationProjetService } from '../../core/services/projet/récuperation/recuperation-projet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { OrdreEtapePipe } from '../../shared/_pipes/ordre-etape.pipe';
import { EtapeWorkflowModel } from '../../core/models/EtapeWorkflowModel';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  projet: ProjetModel;
  etapeminimun: bigint;
  etapesTrieeOrdre: EtapeWorkflowModel[];
  @Output() OutputId = new EventEmitter<bigint>();
  @Input() workflowId: bigint;
  @Input() projetId: bigint;


  constructor(
      private projetService: RecuperationProjetService,
      private routServ: ActivatedRoute,
      private routerServ: Router,
      private toastrServ: NbToastrService,
      private ordreEtapePipe: OrdreEtapePipe
  ) {}

  ngOnInit(): void {
    this.projet = {} as ProjetModel;
    this.etapesTrieeOrdre = {} as EtapeWorkflowModel[];
    this.getProjet(this.routServ.snapshot.params.id);
  }

  getProjet(id: any) {
    this.projetService.getProject(id).subscribe(
        (model) => {
          this.projet = model;
          this.etapesTrieeOrdre = this.ordreEtapePipe.transform(model.etapeWorkflows);
          this.projetId = model.id
        },
        () => {
          this.toastrServ.danger('Erreur dans le chargement du projet ', 'Workflow', {[status]: 'danger'});
          this.routerServ.navigateByUrl('');
        }
    );
  }

  getIdEtapeSuivante(idEtapeCourante: bigint) {
    const indexEtapeCourante = this.etapesTrieeOrdre.findIndex(i => i.id === idEtapeCourante);
    return (this.etapesTrieeOrdre[indexEtapeCourante].id === this.getIdDerniereEtape()) ? this.getIdDerniereEtape() : this.etapesTrieeOrdre[indexEtapeCourante + 1].id;
  }

  getIdDerniereEtape() {
    return this.etapesTrieeOrdre[this.etapesTrieeOrdre.length - 1].id;
  }

  updateProjet(projetOutput: ProjetModel) {
    this.projet = projetOutput;
  }

  envoyerId(){
    this.OutputId.emit(this.projetId);
  }

  
}
