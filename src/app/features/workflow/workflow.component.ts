import { Component, OnInit, Input } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import {ProjetModel} from '../../core/models/Projet/ProjetModel';
import {RecuperationProjetService} from '../../core/services/projet/récuperation/recuperation-projet.service';
import {Router, ActivatedRoute} from '@angular/router';
import {OrdreEtapePipe} from '../../shared/_pipes/ordre-etape.pipe';
import {EtapeWorkflowModel} from '../../core/models/etape/EtapeWorkflowModel';


@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  projet: ProjetModel;
  etapeminimun: bigint;
  etapesTrieeOrdre: EtapeWorkflowModel[];
  @Input() idworkflow: bigint;

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

  CreerUneTache(){
    for(let o of this.etapesTrieeOrdre){
      if(o.numOrdre === 1){
        this.idworkflow = o.id;
      }
    }
    this.routerServ.navigateByUrl('tache/'+this.projet.id+'/'+this.idworkflow+'/creationTache')
  }
}
