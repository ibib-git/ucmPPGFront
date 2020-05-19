import { Component, OnInit } from '@angular/core';
import { CreationProjetService } from 'src/app/core/services/projet/creation/creation-projet.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetCreationModel } from 'src/app/core/models/Projet/ProjetCreationModel';

@Component({
  selector: 'app-creer-un-projet',
  templateUrl: './creer-un-projet.component.html',
  styleUrls: ['./creer-un-projet.component.scss']
})
export class CreerUnProjetComponent implements OnInit {
  
  projetCreer: FormGroup;
  valide : boolean;
  projet : ProjetCreationModel;


  constructor(private serviceCreation : CreationProjetService, private route : Router) { }

  ngOnInit(): void {
    this.valide = false;
    this.projetCreer = new FormGroup({
      nom : new FormControl(null,Validators.compose([
        Validators.required,
        Validators.maxLength(255)
      ])),
      description : new FormControl(null,Validators.compose([
        Validators.maxLength(5000)
      ])),
    });
  }

  validation(){
    this.projet = this.projetCreer.value
    this.serviceCreation.creationP(this.projet).subscribe(
      () => {
        this.route.navigateByUrl('/home');
      },
      () => {
        this.route.navigateByUrl('/projet/creation');
      },
      () => {},
  );

    
  }

}
