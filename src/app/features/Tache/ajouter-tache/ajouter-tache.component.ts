import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { TacheCreationModel } from 'src/app/core/models/TacheCreationModel';
import { NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.scss']
})
export class AjouterTacheComponent implements OnInit {

  AjouterTache: FormGroup;
  TacheAAjouter: TacheCreationModel;
  valeurPrioritaire: string;
  valeurUnite: string;
  @Input() receptionId: bigint[];
  idProjet: bigint;
  idWorkflow: bigint;

  constructor(
    private ajoutTacheService : GestionTacheService,
    private ToastService: NbToastrService,
    private route: Router
    ) {}

  ngOnInit(): void {
    this.AjouterTache = new FormGroup({
      libele: new FormControl(null,Validators.compose([
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
    this.TacheAAjouter = this.AjouterTache.value ;
    this.ajoutTacheService.postTacheAjouter(this.TacheAAjouter,this.idWorkflow).subscribe(
       (model) => {
        this.ToastService.success('Création de la tache', 'Création de Tache', {[status]: 'success'});
        this.route.navigateByUrl('dashboard/Workflow/' + this.idProjet);
       },
       (error) => {
          this.ToastService.danger('Erreur de création de tache', 'Création de tache', {[status]: 'danger'});
       },
       () => {
       });
  }
  

}
