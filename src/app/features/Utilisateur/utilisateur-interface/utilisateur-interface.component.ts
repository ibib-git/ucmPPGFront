import { Component, OnInit, Output } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { NbToastrService } from '@nebular/theme';
import { UtilisateurModel } from 'src/app/core/models/UtilisateurModel';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-utilisateur-interface',
  templateUrl: './utilisateur-interface.component.html',
  styleUrls: ['./utilisateur-interface.component.scss']
})
export class UtilisateurInterfaceComponent implements OnInit {

  utilisateur: UtilisateurModel;

  constructor(private utilisateurService : UtilisateurService,
              private toast: NbToastrService,
              private route : ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getUtilisateur(this.route.snapshot.params['id'])
  }

  getUtilisateur(id: any){
    this.utilisateurService.getUtilisateur(id).subscribe(
      (model) => {
        console.log(model)
        this.utilisateur = model;
      },  
      () => {
        this.toast.danger('Erreur de connextion', 'Utilisateur', {[status]: 'danger'});
      }
    )
  }

  valid(){
    this.utilisateur.participations.forEach(part => {
      console.log("Dans une méthode")
      console.log(part.projet)
      console.log(part.role)
      console.log(part.utilisateur)
    });
  }

}
