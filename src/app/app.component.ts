import { Component } from '@angular/core';
import {UtilisateurService} from './core/services/utilisateur/utilisateur.service';
import {Router} from '@angular/router';
import {UtilisateurAuthentificationModel} from './core/models/Utilisateur/UtilisateurAuthentificationModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ucmPPGFront';
  currentUser: UtilisateurAuthentificationModel;


  constructor(      private authentificationService: UtilisateurService,
                    private router: Router
  ) {
    this.authentificationService.currentUser.subscribe(x => this.currentUser = x);

  }
}
