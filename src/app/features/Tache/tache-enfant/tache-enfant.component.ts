import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TacheCreationEnfantModel } from 'src/app/core/models/TacheCreationEnfantModel';

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

  constructor() { }

  ngOnInit(): void {
    this.AjouterTacheEnfant = new FormGroup({
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
    })}

}
