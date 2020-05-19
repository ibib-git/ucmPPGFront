import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {TacheModel} from '../../../../core/models/tache/TacheModel';
import {NbDialogConfig, NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {MembreProjetModel} from '../../../../core/models/Projet/MembreProjetModel';
import {TacheService} from '../../../../core/services/tache/tache.service';
import {ErreurModel} from '../../../../core/models/erreur/ErreurModel';
import {ProjetModel} from '../../../../core/models/Projet/ProjetModel';


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

  @Output() outputProjet: EventEmitter<ProjetModel>;

  membreAssigne: MembreProjetModel;
  errosModel: ErreurModel;
  estValidee: boolean;
  estSelectAssign: boolean;
  estTacheAssignee: boolean;

  constructor(
      private dialogueService: NbDialogService,
      private toastrServ: NbToastrService,
      private tacheService: TacheService,
  ) {this.outputProjet = new EventEmitter<ProjetModel>(); }

  ngOnInit(): void {
    this.checkMembreAssigne();
    // @ts-ignore en js pas de type
    this.estValidee =  this.checkValidation(this.tache);
    // TODO Token : a remplacer avec l id user du token
    // @ts-ignore
    this.estSelectAssign = false;
  }

  checkMembreAssigne() {
    if (this.tache.utilisateurAffecte === null) {
      this.membreAssigne = null;
      this.estTacheAssignee = false;
    } else {
      this.membreAssigne = this.membresProjet.find(m => m.utilisateur.id === this.tache.utilisateurAffecte.id);
      this.estTacheAssignee = true;
    }
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
    this.estSelectAssign = false;
    this.dialogueService.open(dialog,
        {
          closeOnEsc: true,
          closeOnBackdropClick: true,
          hasScroll: true});
  }

  valider() {
    this.tacheService.valider(this.tache.id).subscribe(
        (projetReturn) => {
          this.toastrServ.success('Tache validee !', this.tache.nom, {[status]: 'success'});
          this.updateProjet(projetReturn);

        },
        (errorComplete) => {
          this.toastrServ.danger('Impossible de valider la tache', this.tache.nom, {[status]: 'danger'});
          this.errosModel = errorComplete.error;
          this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
        }
    );
  }

  updateProjet(projet: ProjetModel) {
    this.outputProjet.emit(projet);
  }

  clickAssignTache(v: boolean){
    this.estSelectAssign = v;
  }

  assignerTache(membreChoisi: MembreProjetModel) {
    // On test si on veut assigner la tache a qqn ou a personne
    if (membreChoisi != null) {
      this.tacheService.assigner(this.tache.id, membreChoisi.utilisateur.id).subscribe(
          (projetReturn) => {
            this.toastrServ.success('Tache assignée !', this.tache.nom, {[status]: 'success'});
            this.membreAssigne = membreChoisi;
            this.updateProjet(projetReturn);
          },
          (errorComplete) => {
            this.toastrServ.danger('Impossible d assigner la tache', this.tache.nom, {[status]: 'danger'});
            this.errosModel = errorComplete.error;
            this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
          },
      );
    } else {
      // on verifie si elle etait deja assignee a qqn ou non au depart
      if (this.membreAssigne != null) {
        // supprimer un utilisateur d une tache
        this.tacheService.congedier(this.tache.id).subscribe(
            (ProjetReturn) => {
              this.toastrServ.success('Utilisateur retiré !', this.tache.nom, {[status]: 'success'});
              this.membreAssigne = null;
              this.updateProjet(ProjetReturn);
            },
            (errorComplete) => {
              this.toastrServ.danger('Impossible de retirer l utilisateur ' + this.membreAssigne.utilisateur.pseudo + ' de la tache', this.tache.nom, {[status]: 'danger'});
              this.errosModel = errorComplete.error;
              this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
            },
        );
      }
    }
    this.estSelectAssign = false;
  }

}
