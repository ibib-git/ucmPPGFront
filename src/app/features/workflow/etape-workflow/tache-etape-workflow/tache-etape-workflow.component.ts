import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {TacheModel} from '../../../../core/models/TacheModel';
import {NbDialogConfig, NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {RoleModel} from '../../../../core/models/RoleModel';
import {MembreProjetModel} from '../../../../core/models/MembreProjetModel';
import {ValiderTacheService} from '../../../../core/services/tache/valider-tache.service';
import {ErreurModel} from '../../../../core/models/ErreurModel';

@Component({
  selector: 'app-tache-etape-workflow',
  templateUrl: './tache-etape-workflow.component.html',
  styleUrls: ['./tache-etape-workflow.component.scss']
})
export class TacheEtapeWorkflowComponent implements OnInit {
  @Input() estDetail: boolean;
  @Input() estProgression: boolean;
  @Input() tache: TacheModel;
  @Input() membresProjet: MembreProjetModel[];
  @Input() idEtapeSuivante: bigint;
  @Input() idDerniereEtape: bigint;

  membreAssigne: MembreProjetModel;
  errosModel: ErreurModel;
  idUtilisateurConnecte: bigint;
  estValidee: boolean;

  constructor(
      private dialogueService: NbDialogService,
      private toastrServ: NbToastrService,
      private tacheService: ValiderTacheService,
  ) { }

  ngOnInit(): void {
    this.membreAssigne = this.membresProjet.find(m => m.utilisateur.pseudo === this.tache.utilisateurAffecte.pseudo);
    // @ts-ignore en js pas de type
    this.estValidee =  this.checkValidation(this.tache);
    // TODO Damien : a remplacer avec l id user du token
    // @ts-ignore
    this.idUtilisateurConnecte = 1;
  }

  checkValidation(tacheToCheck: TacheModel) {
    // si il trouve dans l'histo de la tache une correspondance pour l etape suivante alors elle a été validee sinon il renvoit undefined
    // TODO DAMIEN : erreur en back tout l histo est null
    return Boolean(tacheToCheck.historique.find(h => ((h.etapeWorkflow.id === this.idEtapeSuivante) || (h.etapeWorkflow.id === this.idDerniereEtape)) ));
  }

  clickDetails(clicked: boolean) {
    this.estDetail = clicked;
  }

  showDetails(dialog: TemplateRef<any>) {
    this.dialogueService.open(dialog,
        {
          closeOnEsc: true,
          closeOnBackdropClick: true,
          hasScroll: true});
  }

  valider ()
  {
    this.tacheService.valider(this.tache.id, this.idUtilisateurConnecte).subscribe(
        (projetReturn) => {
          this.toastrServ.success('Tache validee !', this.tache.nom, {[status]: 'success'});

        },
        (errorComplete) => {
          this.toastrServ.danger('Impossible de valider la tache', this.tache.nom, {[status]: 'danger'});
          this.errosModel = errorComplete.error;
          console.log(this.errosModel);
          this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});

        }
    );
  }

}
