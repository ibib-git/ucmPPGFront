import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { TacheCreationModel } from 'src/app/core/models/etape/TacheCreationModel';
import { NbToastrService } from '@nebular/theme';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private ajoutTacheService : GestionTacheService,
    private toastService: NbToastrService,
    private route: Router,
    private routeActive: ActivatedRoute
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
        this.toastService.success('Création de tache valider','creation Tache',{[status]: 'success'});
      },
      (error) => {
        this.toastService.danger('Erreur tache', 'Erreur création tache', {[status]: 'danger'});
      },
      () => {});
      console.log(this.tacheAAjouter)
      this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
  }
  
  retour(){
    this.route.navigateByUrl('dashboard/Workflow/'+this.idProjet);
  }

}
