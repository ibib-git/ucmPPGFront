import { Component, OnInit, Output } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur/utilisateur.service';
import { NbToastrService } from '@nebular/theme';
import { UtilisateurModel } from 'src/app/core/models/Utilisateur/UtilisateurModel';
import { Router, ActivatedRoute } from '@angular/router';
import {ErreurModel} from '../../../core/models/erreur/ErreurModel';
import {ParticipationModel} from '../../../core/models/participation/ParticipationModel';
import {ProjetModel} from '../../../core/models/Projet/ProjetModel';
import {EtapeWorkflowModel} from '../../../core/models/etape/EtapeWorkflowModel';


@Component({
  selector: 'app-utilisateur-interface',
  templateUrl: './utilisateur-interface.component.html',
  styleUrls: ['./utilisateur-interface.component.scss']
})
export class UtilisateurInterfaceComponent implements OnInit {

  utilisateur: UtilisateurModel;
  errosModel: ErreurModel[];

  projet: ProjetModel;

  constructor(private utilisateurService: UtilisateurService,
              private toast: NbToastrService,
              private route: ActivatedRoute,
              private routServ: Router
    ) { }

  ngOnInit(): void {
    this.utilisateur = {} as UtilisateurModel;
    // TODO Token : recuperer l id du token
    this.getUtilisateur(this.route.snapshot.params.id);
    this.errosModel = {} as ErreurModel[];
  }

  getUtilisateur(id: bigint) {
    this.utilisateurService.getUtilisateur(id).subscribe(
      (model) => {
        this.utilisateur = model;
      },
      (errorComplete) => {
        this.toast.danger('Erreur de connexion', 'Utilisateur', {[status]: 'danger'});
        // Dans le cas d'erreurs 500 ca signifie que ce n'est pas des erreurs prévue par le system et donc non controlées
        if (errorComplete.status < 500) {
          this.errosModel = errorComplete.error;
          this.errosModel.forEach(e => {
            this.toast.danger(e.erreurMessage , e.nomDuChamps, {[status]: 'danger'});
          });
        }
        this.routServ.navigateByUrl('/home');
      }
    );
  }

  getIdEtapeSuivante(idEtapeCourante: bigint, etapesTriee: EtapeWorkflowModel[]) {
    const indexEtapeCourante = etapesTriee.findIndex(i => i.id === idEtapeCourante);

    return (etapesTriee[indexEtapeCourante].id === this.getIdDerniereEtape(etapesTriee)) ? this.getIdDerniereEtape(etapesTriee) : etapesTriee[indexEtapeCourante + 1].id;
  }

  getIdDerniereEtape(etapesTriee: EtapeWorkflowModel[]) {
    return etapesTriee[etapesTriee.length - 1].id;
  }
}
