import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { ActivatedRoute } from '@angular/router';
import { TacheModel } from 'src/app/core/models/TacheModel';
import { UtilisateurDetailsModel } from 'src/app/core/models/UtilisateurDetailsModel';

@Component({
  selector: 'app-supprimer-tache',
  templateUrl: './supprimer-tache.component.html',
  styleUrls: ['./supprimer-tache.component.scss']
})
export class SupprimerTacheComponent implements OnInit {

  supprimer: FormGroup;
  suppressionEnCascade: boolean;
  idtache: bigint
  tacheASupprimer: TacheModel;
  utilisateurDeTache: UtilisateurDetailsModel
  tacheEnfants: TacheModel[];

  constructor(
    private tacheService: GestionTacheService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idtache = this.route.snapshot.params['idTache'];
    this.tacheService.getTache(this.idtache).subscribe(
      (model) =>{
        console.log(model)
        this.tacheASupprimer = model;
        this.utilisateurDeTache = model.utilisateurAffecte;
        this.tacheEnfants = model.tacheEnfants;
      },
      (error) => {
      })
    this.suppressionEnCascade = null;
    this.supprimer = new FormGroup({
      EnCascade: new FormControl(null,Validators.compose([
        Validators.required
      ])),
    });
  }

  verif(){
    console.log(this.tacheEnfants);
    
  }

  suppressionDeTache(){
    console.log(this.supprimer)
    this.tacheASupprimer = this.supprimer.value;
    //  this.tacheGestionService.postTacheSupprimer().subscribe(
    //    (model) => {
    //      this.toastrServ.success('Erreur dans la suppression de tache', 'Suppression de la tache', {[status]: 'success'});
    //    },
    //    (error) => {
    //      this.toastrServ.danger('Erreur Aucun Suppression', 'Bug étrange', {[status]: 'danger'});
    //    },
    //    () => {}
    //    )
    this.suppressionEnCascade = null;
      //TODO: refresh()
  }

  toutSupprimer(){
    this.suppressionEnCascade = true;
  }

  seulSupprimer(){
    this.suppressionEnCascade = false;
  }

}
