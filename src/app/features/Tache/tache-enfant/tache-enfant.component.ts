import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tache-enfant',
  templateUrl: './tache-enfant.component.html',
  styleUrls: ['./tache-enfant.component.scss']
})

export class TacheEnfantComponent implements OnInit {

  valeur: string[];
  value: string;
  AjouterTacheEnfant: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.valeur = ["inutile","inferieur","moyenne","haute","prioritaire"];
    this.AjouterTacheEnfant = new FormGroup({
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
    })}

}
