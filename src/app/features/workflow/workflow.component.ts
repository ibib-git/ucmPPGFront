import { Component, OnInit } from '@angular/core';
import {Projet} from '../../core/models/Projet';
import {RecuperationProjetService} from '../../core/services/projet/récuperation/recuperation-projet.service';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  projet: Projet;

  constructor(
      private projetService: RecuperationProjetService,
      private routServ: Router,
      private toastrServ: NbToastrService
  ) { }

  ngOnInit(): void {

    this.projet = {} as Projet;
    this.getProjet(1);
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
