import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Priorite } from 'src/app/core/enums/Priorite';

@Component({
  selector: 'app-ajouter-tache',
  templateUrl: './ajouter-tache.component.html',
  styleUrls: ['./ajouter-tache.component.scss']
})
export class AjouterTacheComponent implements OnInit {

  AjouterTache: FormGroup;
  
  valeur: Priorite[];
  value: string;
  idProjet: bigint;
  idWorkflow: bigint;

  constructor() { }

  ngOnInit(): void {
    this.valeur = [Priorite.HAUTE,Priorite.INFERIEUR,Priorite.INUTILE,Priorite.MOYENNE,Priorite.PRIORITAIRE]
    this.AjouterTache = new FormGroup({
      libele: new FormControl(null,Validators.compose([
        Validators.required,
        Validators.maxLength(50)
      ])),
      description: new FormControl(null,Validators.compose([
        Validators.minLength(10),
        Validators.maxLength(150)
      ])),
      unite: new FormControl(null,Validators.compose([
        Validators.required
      ])),
      priorite: new FormControl(null,Validators.compose([
        Validators.required
      ])),
    });
  }

  validation(){
    this.AjouterTache.value
  }

}
