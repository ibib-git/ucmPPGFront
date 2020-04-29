import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TacheCreationEnfantModel } from 'src/app/core/models/TacheCreationEnfantModel';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-tache-enfant',
  templateUrl: './tache-enfant.component.html',
  styleUrls: ['./tache-enfant.component.scss']
})

export class TacheEnfantComponent implements OnInit {

  AjouterTache: FormGroup;
  TacheAAjouter: TacheCreationEnfantModel;
  valeurPrioritaire: string;
  valeurUnite: string;
  AjouterTacheEnfant: FormGroup;

  constructor(
    private TacheService: GestionTacheService,
    private ToastService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.AjouterTacheEnfant = new FormGroup({
      libeleEnfant: new FormControl(null,Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(50)
      ])),
      descriptionEnfant: new FormControl(null,Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(150)
      ])),
      estimationEnfant: new FormControl(null,null),
      uniteEnfant: new FormControl(null,null),
      prioriteEnfant: new FormControl(null,null)
    })}

    validationEnfant(){
      
    }
}
