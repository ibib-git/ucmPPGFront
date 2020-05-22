import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {ProjetModel} from '../../../../core/models/Projet/ProjetModel';
import {MembreProjetModel} from '../../../../core/models/Projet/MembreProjetModel';
import {TacheModel} from '../../../../core/models/tache/TacheModel';
import {ErreurModel} from '../../../../core/models/erreur/ErreurModel';
import {NbDialogRef, NbToastrService} from '@nebular/theme';
import {TacheService} from '../../../../core/services/tache/tache.service';
import {isElementScrolledOutsideView} from '@angular/cdk/overlay/position/scroll-clip';

@Component({
  selector: 'app-tache-modal',
  templateUrl: './tache-modal.component.html',
  styleUrls: ['./tache-modal.component.scss']
})
export class TacheModalComponent implements OnInit {
  tache: TacheModel;
  membresProjet: MembreProjetModel[];
  idEtapeSuivante: bigint;
  idDerniereEtape: bigint;

  projet: ProjetModel;

  membreAssigne: MembreProjetModel;
  errosModel: ErreurModel;
  estValidee: boolean;
  estSelectAssign: boolean;
  estTacheAssignee: boolean;
  estModifie: boolean;

  constructor( private toastrServ: NbToastrService,
               private tacheService: TacheService,
               private dialogRef: NbDialogRef<TacheModalComponent>) { }

  ngOnInit(): void {
    this.checkMembreAssigne();
    // @ts-ignore en js pas de type
    this.estValidee =  this.checkValidation(this.tache);
    // @ts-ignore
    this.estSelectAssign = false;
    this.estModifie = false;
    console.log(this.tache);
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


  valider() {
    this.tacheService.valider(this.tache.id).subscribe(
        (projetReturn) => {
          this.toastrServ.success('Tache validee !', this.tache.nom, {[status]: 'success'});
          this.projet = projetReturn;
          this.estModifie = true;

        },
        (errorComplete) => {
          this.toastrServ.danger('Impossible de valider la tache', this.tache.nom, {[status]: 'danger'});
          this.errosModel = errorComplete.error;
          this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
        }
    );
  }


  clickAssignTache(v: boolean) {
    this.estSelectAssign = v;
  }

  assignerTache(membreChoisi: MembreProjetModel) {
    // On test si on veut assigner la tache a qqn ou a personne
    if (membreChoisi != null) {
      this.tacheService.assigner(this.tache.id, membreChoisi.utilisateur.id).subscribe(
          (projetReturn) => {
            this.toastrServ.success('Tache assignée !', this.tache.nom, {[status]: 'success'});
            this.membreAssigne = membreChoisi;
            this.projet = projetReturn;
            this.estModifie = true;

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
              this.projet = ProjetReturn;
              this.estModifie = true;

            },
            (errorComplete) => {
              this.toastrServ.danger('Impossible de retirer l utilisateur ' + this.membreAssigne.utilisateur.pseudo + ' de la tache', this.tache.nom,
                  {[status]: 'danger'});
              this.errosModel = errorComplete.error;
              this.toastrServ.danger(this.errosModel.erreurMessage , this.errosModel.nomDuChamps, {[status]: 'danger'});
            },
        );
      }
    }
    this.estSelectAssign = false;
  }

  close() {
    this.estModifie ? this.dialogRef.close(this.projet) : this.dialogRef.close(null);
  }

 



}
