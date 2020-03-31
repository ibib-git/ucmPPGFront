import { Component, OnInit } from '@angular/core';
import { EtapeWorkflow } from 'src/app/core/models/EtapeWorkflow';
import { ModifierprojetService } from 'src/app/core/services/projet/gestion/modifierprojet.service';
import { Projet } from 'src/app/core/models/Projet';
import { Participation } from 'src/app/core/models/Participation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Utilisateur } from 'src/app/core/models/Utilisateur';
import { gestionProjet } from 'src/app/core/models/gestionProjet';

@Component({
  selector: 'app-projet-gestion',
  templateUrl: './projet-gestion.component.html',
  styleUrls: ['./projet-gestion.component.scss']
})
export class ProjetGestionComponent implements OnInit {

  projet : Projet
  nouveauMail : string;
  controleDeMail : FormGroup;
  gestion : gestionProjet

  constructor(private serviceProjetGestion : ModifierprojetService) { }

  ngOnInit(): void {
    this.controleDeMail = new FormGroup({
      mail : new FormControl(null,Validators.compose([
        Validators.required,
        Validators.email,
      ]))
    });
    this.nouveauMail = null;
  }

  ajouterDesCollaborateur(){
    console.log(this.nouveauMail)
  }

}
