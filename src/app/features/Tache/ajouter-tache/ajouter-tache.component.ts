import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { TacheCreationModel } from 'src/app/core/models/etape/TacheCreationModel';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';
import {ErreurModel} from '../../../core/models/erreur/ErreurModel';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.scss']
})
export class AjouterTacheComponent implements OnInit {

  AjouterTache: FormGroup;
  tacheAAjouter: TacheCreationModel;
  valeurPrioritaire: string;
  valeurUnite: string;
  idProjet: bigint;
  idWorkflow: bigint;
  errosModel: ErreurModel[];


  constructor(
    private ajoutTacheService : GestionTacheService,
    private toastService: NbToastrService,
    private route: Router,
    private routeActive: ActivatedRoute,
    private toastrServ: NbToastrService,

  ) {}

  ngOnInit(): void {
    this.idProjet = this.routeActive.snapshot.params['idprojet'];
    this.idWorkflow = this.routeActive.snapshot.params['idWorkflow'];
    this.AjouterTache = new FormGroup({
      nom: new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ])),
      description: new FormControl(null,Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(150)
      ])),
      estimation: new FormControl(null,null),
      unite: new FormControl(null,null),
      priorite: new FormControl(null,null)
    });
  }

  validation(){
    this.tacheAAjouter = this.AjouterTache.value ;
    this.ajoutTacheService.postTacheAjouter(this.tacheAAjouter,this.idWorkflow,this.idProjet).subscribe(
      (model) => {
        this.toastService.success('Création de tache valider', 'creation Tache',{[status]: 'success'});
        this.route.navigateByUrl('dashboard/Workflow/'+ this.idProjet);

      },
      (errorComplete) => {
        this.toastService.danger('Erreur tache', 'Erreur création tache', {[status]: 'danger'});
        // Dans le cas d'erreurs 500 ca signifie que ce n'est pas des erreurs prévue par le system et donc non controlées
        if (errorComplete.header.status < 500) {
          this.errosModel = errorComplete.error;
          this.errosModel.forEach(e => {
            this.toastrServ.danger(e.erreurMessage , e.nomDuChamps, {[status]: 'danger'});
          });
        }
        this.route.navigateByUrl('dashboard/Workflow/'+ this.idProjet);
      },
      () => {});
  }
  
  retour(){
    this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
  }

}
