import { Component, OnInit } from '@angular/core';
import {UtilisateurAuthentificationModel} from '../../../core/models/Utilisateur/UtilisateurAuthentificationModel';
import {UtilisateurService} from '../../../core/services/utilisateur/utilisateur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentUser: UtilisateurAuthentificationModel;

  constructor(
      private authentificationService: UtilisateurService,

  ) {
    this.currentUser = this.authentificationService.currentUserValue;
  }

  ngOnInit(): void {
  }

}
