import { Component, OnInit } from '@angular/core';
import { ModifierprojetService } from 'src/app/core/services/projet/gestion/modifierprojet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilisateurAjouter } from 'src/app/core/models/UtilisateurAjouter';
import { NbToastrService } from '@nebular/theme';
import {ProjetModel} from '../../../../core/models/ProjetModel';

@Component({
  selector: 'app-projet-gestion',
  templateUrl: './projet-gestion.component.html',
  styleUrls: ['./projet-gestion.component.scss']
})
export class ProjetGestionComponent implements OnInit {

  projet : ProjetModel;
  nouveauMail : string;
  controleDeMail : FormGroup;
  ajouterUtilisateur : UtilisateurAjouter;

  constructor(private serviceProjetGestion : ModifierprojetService, private toastservice : NbToastrService) { }

  ngOnInit(): void {
    this.controleDeMail = new FormGroup({
      mail : new FormControl(null,Validators.compose([
        Validators.required,
        Validators.email,
      ]))
    });
    this.nouveauMail = null;
    this.ajouterUtilisateur = null;
    this.projet = null;
  }

  ajouterDesCollaborateur(){
    this.ajouterUtilisateur.projet = this.projet;
    this.ajouterUtilisateur.mail = this.nouveauMail;
    this.serviceProjetGestion.ajouterCollaborateur(this.ajouterUtilisateur).subscribe(
      (model) => {
        this.toastservice.success('Validation de la demande', 'Réussite', {[status]: 'success'});
        console.log(model);
      },
      () => {
        this.toastservice.danger('Echec d enregistrement ', 'defaut', {[status]: 'danger'});
      },
      () => {},
      
    )

  }

}
