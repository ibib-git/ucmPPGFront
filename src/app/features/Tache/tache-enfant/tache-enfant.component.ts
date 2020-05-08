import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {GestionTacheService} from 'src/app/core/services/tache/gestionTache.service';
import {NbToastrService} from '@nebular/theme';
import {Router, ActivatedRoute} from '@angular/router';
import { TacheCreationModel } from 'src/app/core/models/TacheCreationModel';


@Component({
  selector: 'app-tache-enfant',
  templateUrl: './tache-enfant.component.html',
  styleUrls: ['./tache-enfant.component.scss']
})

export class TacheEnfantComponent implements OnInit {

  AjouterTache: FormGroup;
  TacheAAjouter: TacheCreationModel;
  AjouterTacheEnfant: FormGroup;
  idWorkflow: bigint;
  idProjet: bigint;
  idTache: bigint;
  valeurPrioritaire: string;
  valeurUnite: string;
  tacheParent: boolean;

  constructor(
    private TacheService: GestionTacheService,
    private toastService: NbToastrService,
    private route: Router,
    private routeActive: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.tacheParent = false;
    this.idProjet = this.routeActive.snapshot.params['idprojet'];
    this.idWorkflow = this.routeActive.snapshot.params['idWorkflow'];
    this.idTache = this.routeActive.snapshot.params['idTache'];
    this.AjouterTacheEnfant = new FormGroup({
      nom: new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ])),
      description: new FormControl(null,Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(150)
      ])),
      priorite: new FormControl(null,null),
      estimation: new FormControl(null,null),
      unite: new FormControl(null,null),
    })
  }

    validationEnfant(){
      this.TacheAAjouter = this.AjouterTacheEnfant.value;
      this.TacheService.postTacheAjouterEnfant(this.idWorkflow,this.idProjet,this.idTache,this.TacheAAjouter).subscribe(
        (model) => {
          this.toastService.success('Création de tache-enfant valider','creation Tache-enfant',{[status]: 'success'});
        },
        (error) => {
          this.toastService.danger('Erreur tache-enfant', 'Erreur création tache-enfant', {[status]: 'danger'});
        },
        () => {}); 
        this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
    }

    TacheParentClick(){
      this.tacheParent = true;
      this.toastService.success('Tache Parent','Validation de la Tache Parent',{[status]: 'success'});
    }

    TacheParentErreur(){
      this.toastService.danger('Retour au projet initiale','Erreur Tache Parent',{[status]: 'danger'});
      this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
    }

    retour(){
      this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
    }
}
