import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { UtilisateurModel } from 'src/app/core/models/UtilisateurModel';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-utilisateur-interface',
  templateUrl: './utilisateur-interface.component.html',
  styleUrls: ['./utilisateur-interface.component.scss']
})
export class UtilisateurInterfaceComponent implements OnInit {

  utilisateur : UtilisateurModel

  constructor(private utilisateurService : UtilisateurService,
              private route : Router,
              private toast: NbToastrService
    ) { }

  ngOnInit(): void {
    this.getUtilisateur(1);
    console.log(this.utilisateur)
  }

  getUtilisateur(id : any){
    this.utilisateurService.recuperation(id).subscribe(
      (model) => {
        this.utilisateur = model;
      },
      () => {
        this.toast.danger('Erreur de connextion', 'Utilisateur', {[status]: 'danger'});
      }
    )
  }

}
