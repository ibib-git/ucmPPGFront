import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GestionTacheService } from 'src/app/core/services/tache/gestionTache.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { TacheSupprimerModel } from 'src/app/core/models/tache/TacheSupprimerModel';
import { TacheModel } from 'src/app/core/models/tache/TacheModel';
import { UtilisateurDetailsModel } from 'src/app/core/models/Utilisateur/UtilisateurDetailsModel';

@Component({
  selector: 'app-supprimer-tache',
  templateUrl: './supprimer-tache.component.html',
  styleUrls: ['./supprimer-tache.component.scss']
})
export class SupprimerTacheComponent implements OnInit {

  supprimer: FormGroup;
  suppressionEnCascade: boolean;
  suppressionEncascadePossible:boolean;
  idtache: bigint
  idprojet: bigint;
  tacheASupprimer: TacheModel;
  utilisateurDeTache: UtilisateurDetailsModel
  tacheEnfants: TacheModel[];
  tacheEnCascade: TacheSupprimerModel;
  valide: boolean;
  refuse: boolean;

  constructor(
    private tacheService: GestionTacheService,
    private route: ActivatedRoute,
    private ToastService: NbToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.valide = true;
    this.refuse = false;
    this.idtache = this.route.snapshot.params['idTache'];
    this.idprojet = this.route.snapshot.params['idProjet'];
    this.tacheService.getTache(this.idtache).subscribe(
      (model) =>{
        console.log(model)
        this.tacheASupprimer = model;
        this.utilisateurDeTache = model.utilisateurAffecte;
        this.tacheEnfants = model.tacheEnfants;
        if(model.tacheEnfants.length != 0){
          this.suppressionEncascadePossible = false;
        }else{
          this.suppressionEncascadePossible = true;
        }
      },
      (error) => {
      })
    this.supprimer = new FormGroup({
      EnCascade: new FormControl(null,Validators.compose([
        Validators.required
      ])),
    });
  }


  suppressionDeTache(tache: bigint){
    this.tacheEnCascade = this.supprimer.value;
    this.tacheService.postTacheSupprimer(tache,this.tacheEnCascade).subscribe(
      (model) => {
        this.ToastService.success('Erreur dans la suppression de tache', 'Suppression de la tache', {[status]: 'success'});
      },
      (error) => {
        this.ToastService.danger('Erreur Aucun Suppression', 'Bug étrange', {[status]: 'danger'});
      },() => {});
    this.suppressionEnCascade = null;
    this.router.navigateByUrl('/dashboard/Workflow/'+this.idprojet);
  }

  toutSupprimer(){
    this.suppressionEnCascade = true;
  }

  seulSupprimer(){
    this.suppressionEnCascade = false;
  }

}
