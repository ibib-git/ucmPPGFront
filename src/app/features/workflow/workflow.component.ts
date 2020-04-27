import { Component, OnInit } from '@angular/core';
import { ProjetModel} from '../../core/models/ProjetModel';
import { RecuperationProjetService } from '../../core/services/projet/récuperation/recuperation-projet.service';
import { ActivatedRoute } from '@angular/router';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  projet: ProjetModel;
  etapeminimun: bigint;

  constructor(
      private projetService: RecuperationProjetService,
      private routServ: ActivatedRoute,
      private toastrServ: NbToastrService
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
        }
    );
  }

}
