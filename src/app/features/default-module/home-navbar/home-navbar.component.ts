import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {UtilisateurService} from '../../../core/services/utilisateur/utilisateur.service';
import {UtilisateurAuthentificationModel} from '../../../core/models/Utilisateur/UtilisateurAuthentificationModel';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  currentUser: UtilisateurAuthentificationModel;
  menuItems: NbMenuItem[] = [
    {
      title: 'pseudo',
      icon: 'person-outline',
      expanded: false,
      home: true,
      children: [
        {
          title: 'Deconnexion',
          icon: 'log-out-outline',
        }
      ]
    },
  ];
  constructor(private authentificationService: UtilisateurService) {
    this.currentUser = this.authentificationService.currentUserValue;

  }

  ngOnInit(): void {

  }

  deconnexion(){
    this.authentificationService.logout();
  }

}
