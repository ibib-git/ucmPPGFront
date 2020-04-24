import { Component, OnInit } from '@angular/core';
import {ProjetModel} from '../../core/models/ProjetModel';
import {RecuperationProjetService} from '../../core/services/projet/récuperation/recuperation-projet.service';
import {Router, ActivatedRoute} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {MembreProjetModel} from '../../core/models/MembreProjetModel';
import {max} from 'rxjs/operators';
import {OrdreEtapePipe} from '../../shared/_pipes/ordre-etape.pipe';
import {EtapeWorkflowModel} from '../../core/models/EtapeWorkflowModel';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  projet: ProjetModel;


  constructor(
      private projetService: RecuperationProjetService,
      private routServ: ActivatedRoute,
      private routerServ: Router,
      private toastrServ: NbToastrService,
      private ordreEtapePipe: OrdreEtapePipe
  ) { }

  ngOnInit(): void {
    this.projet = {} as ProjetModel;
    this.getProjet(this.routServ.snapshot.params['id']);

  }

  getProjet(id: any) {
    this.projetService.getProject(id).subscribe(
        (model) => {
          this.projet = model;
        },
        () => {
          this.toastrServ.danger('Erreur dans le chargement du projet ', 'Workflow', {[status]: 'danger'});
          this.routerServ.navigateByUrl('');
        }
    );
  }

  getIdEtapeSuivante(idEtapeCourante: bigint) {
    const etapesTrieeOrdre = this.ordreEtapePipe.transform(this.projet.etapeWorkflows);
    // @ts-ignore
    const indexEtapeCourante = etapesTrieeOrdre.findIndex(i => i.id === idEtapeCourante);
    return (indexEtapeCourante + 1 >= this.getIdDerniereEtape()) ? this.getIdDerniereEtape() : etapesTrieeOrdre[indexEtapeCourante + 1].id;
  }

  getIdDerniereEtape() {
    const etapesTrieeOrdre = this.ordreEtapePipe.transform(this.projet.etapeWorkflows);
    // @ts-ignore
    return etapesTrieeOrdre[etapesTrieeOrdre.length - 1].id;
  }

  updateProjet(projetOutput: ProjetModel) {
    this.projet = projetOutput;
  }

}
