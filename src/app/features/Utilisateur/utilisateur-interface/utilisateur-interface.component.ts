import { Component, OnInit, Output } from '@angular/core';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { UtilisateurModel } from 'src/app/core/models/UtilisateurModel';
import { NbToastrService } from '@nebular/theme';


@Component({
  selector: 'app-utilisateur-interface',
  templateUrl: './utilisateur-interface.component.html',
  styleUrls: ['./utilisateur-interface.component.scss']
})
export class UtilisateurInterfaceComponent implements OnInit {

  utilisateur: UtilisateurModel;

  constructor(private utilisateurService : UtilisateurService,
              private toast: NbToastrService,
    ) { }

  ngOnInit(): void {
    this.getUtilisateur(1);
  }

  getUtilisateur(id: any){
    this.utilisateurService.getUtilisateur(id).subscribe(
      (model) => {
        this.utilisateur = model;
      },
      () => {
        this.toast.danger('Erreur de connextion', 'Utilisateur', {[status]: 'danger'});
      }
    )
  }

  valid(){
    this.utilisateur.participations.forEach(part => {
      console.log(part.projet)
      console.log(part.role)
      console.log(part.utilisateur)
    });
  }

}
