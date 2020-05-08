import { Component, OnInit } from '@angular/core';
import { ModifierprojetService } from 'src/app/core/services/projet/gestion/modifierprojet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProjetAjoutCollaborateurModel } from 'src/app/core/models/ProjetAjoutCollaborateurModel';
import { NbToastrService } from '@nebular/theme';
import { ProjetModel } from '../../../../core/models/ProjetModel';
import { RecuperationProjetService } from 'src/app/core/services/projet/récuperation/recuperation-projet.service';
import { SupprimerCollaborateurModel } from 'src/app/core/models/SupprimerCollaborateurModel';

@Component({
  selector: 'app-projet-gestion',
  templateUrl: './projet-gestion.component.html',
  styleUrls: ['./projet-gestion.component.scss']
})
export class ProjetGestionComponent implements OnInit {

  projet : ProjetModel;
  nouveauMail : string;
  controleDeMail : FormGroup;
  ajouterUtilisateur : ProjetAjoutCollaborateurModel;
  supprimerUtilisateur: SupprimerCollaborateurModel;

  constructor(
      private serviceProjetGestion : ModifierprojetService,
      private toastservice : NbToastrService,
      private serviceRecuperation : RecuperationProjetService) { }

  ngOnInit(): void {
    this.controleDeMail = new FormGroup({
      mail : new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
      ]))
    });
    this.projet = {} as ProjetModel;
    this.getProjet(1);
    this.supprimerUtilisateur = {} as SupprimerCollaborateurModel;
    this.ajouterUtilisateur = {} as ProjetAjoutCollaborateurModel;
  }

  supprimer(mail: string){
    this.supprimerUtilisateur.idProjet = this.projet.id;
    this.supprimerUtilisateur.mail = mail;
    this.serviceProjetGestion.supprimerCollaborateur(this.supprimerUtilisateur).subscribe(
      (model) => {
        this.toastservice.success('Validation de la demande', 'Réussite', {[status]: 'success'});
        this.getProjet(1);
        },
      () => {
        this.toastservice.danger('Echec d enregistrement ', 'defaut', {[status]: 'danger'});
      }
    );
    this.refresh();
  }

  getProjet(id : any){
    this.serviceRecuperation.getProject(id).subscribe(
      (model) => {
        this.projet = model;
      },
      () =>{
        this.toastservice.danger('Erreur lors de récupération', 'Projet', {[status]: 'danger'});
      });
  }

  ajouterDesCollaborateur() {
    this.ajouterUtilisateur.idProjet = this.projet.id;
    this.ajouterUtilisateur.emailUtilisateur = this.nouveauMail;
    this.serviceProjetGestion.ajouterCollaborateur(this.ajouterUtilisateur).subscribe(
      (model) => {
        this.toastservice.success('Validation de la demande', 'Réussite', {[status]: 'success'});
      },
      () => {
        this.toastservice.danger('Echec d enregistrement ', 'defaut', {[status]: 'danger'});
      },
      () => {}, 
    )
  }
    refresh(){
      // Encore à terminer;
    }

}
