import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {TacheModel} from '../../../../core/models/TacheModel';
import {NbDialogService, NbToastrService} from '@nebular/theme';
import {MembreProjetModel} from '../../../../core/models/MembreProjetModel';
import {ValiderTacheService} from '../../../../core/services/tache/valider-tache.service';
import {ErreurModel} from '../../../../core/models/ErreurModel';
import {ProjetModel} from '../../../../core/models/ProjetModel';
import { Router } from '@angular/router';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { TacheSupprimerModel } from 'src/app/core/models/TacheSupprimerModel';

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
  errosModel: ErreurModel;
  idUtilisateurConnecte: bigint;
  estValidee: boolean;

  constructor(
      private dialogueService: NbDialogService,
      private toastrServ: NbToastrService,
      private tacheService: ValiderTacheService,
      private tacheGestionService: GestionTacheService,
      private route: Router,
  ) {this.outputProjet = new EventEmitter<ProjetModel>(); }

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
    this.tacheService.valider(this.tache.id, this.idUtilisateurConnecte).subscribe(
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
}
