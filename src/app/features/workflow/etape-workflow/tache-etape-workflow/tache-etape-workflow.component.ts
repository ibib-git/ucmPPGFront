import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {TacheModel} from '../../../../core/models/tache/TacheModel';
import {NbDialogConfig, NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {MembreProjetModel} from '../../../../core/models/Projet/MembreProjetModel';
import {ErreurModel} from '../../../../core/models/erreur/ErreurModel';
import {ProjetModel} from '../../../../core/models/Projet/ProjetModel';
import {TacheModalComponent} from '../../../Projet/tache/tache-modal/tache-modal.component';
import { Router } from '@angular/router';
import { TacheService } from 'src/app/core/services/tache/tache.service';

@Component({
  selector: 'app-tache-etape-workflow',
  templateUrl: './tache-etape-workflow.component.html',
  styleUrls: ['./tache-etape-workflow.component.scss']
})
export class TacheEtapeWorkflowComponent implements OnInit {
  @Input() estDetail: boolean;
  @Input() estProgression: boolean;
  @Input() tache: TacheModel;
  @Input() etapeEnfant: bigint;
  @Input() idprojet: bigint;
  @Input() membresProjet: MembreProjetModel[];
  @Input() idEtapeSuivante: bigint;
  @Input() idDerniereEtape: bigint;
  @Input() idWorkflow: bigint;
  @Output() outputProjet: EventEmitter<ProjetModel>;

  membreAssigne: MembreProjetModel;
  estValidee: boolean;
  estSelectAssign: boolean;
  estTacheAssignee: boolean;
  progression: number;


  constructor(
      private dialogueService: NbDialogService,
      private toastrServ: NbToastrService,
      private route: Router,
      private tacheService: TacheService,
  ) {this.outputProjet = new EventEmitter<ProjetModel>(); }

  ngOnInit(): void {
    this.checkMembreAssigne();
    // @ts-ignore en js pas de type
    this.estValidee =  this.checkValidation(this.tache);
    // @ts-ignore
    this.estSelectAssign = false;
    this.progression = this.calculProgression();
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

  showDetails() {
    this.estSelectAssign = false;
    const action = this.dialogueService.open(TacheModalComponent,
        {
          context: {
            tache: this.tache,
            membresProjet: this.membresProjet,
            idEtapeSuivante: this.idEtapeSuivante,
            idDerniereEtape: this.idDerniereEtape},
          closeOnEsc: true,
          closeOnBackdropClick: true,
          hasScroll: true});
    action.onClose.subscribe(value => {
      if (value) {
        this.updateProjet(value);
        this.progression = this.calculProgression();
      }
    });
  }

  showSupprimer(supprimer: TemplateRef<any>){
    this.dialogueService.open(supprimer,
      {
        closeOnEsc: true,
        closeOnBackdropClick: true,
        hasScroll: true
      });
  }

  supprimerTache(id: bigint){
    this.route.navigateByUrl('/tache/'+this.idprojet+'/'+id+'/supprimer')
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

  CreationDeTacheParent(tacheParent: bigint){
    this.route.navigateByUrl('tache/'+this.idprojet+'/'+this.idWorkflow+'/'+tacheParent+'/creationEnfant');
  }
  clickAssignTache(v: boolean){
    this.estSelectAssign = v;
  }
  calculProgression() {

    if (this.tache.tacheEnfants.length !== 0) {
      let nbValide = 0;
      for (const enfant of this.tache.tacheEnfants) {
        if (this.checkValidation(enfant)) {
          nbValide += 1;
        }
      }
      return (nbValide / this.tache.tacheEnfants.length) * 100;
    } else { return 0; }
  }


}
