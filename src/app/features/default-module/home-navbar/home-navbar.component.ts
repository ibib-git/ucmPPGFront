import { Component, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import {UtilisateurService} from '../../../core/services/utilisateur/utilisateur.service';
import {UtilisateurAuthentificationModel} from '../../../core/models/Utilisateur/UtilisateurAuthentificationModel';
import {Router, RouterLink, RouterModule} from '@angular/router';

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
  constructor(
      private authentificationService: UtilisateurService,
      private router: Router) {
     this.authentificationService.currentUser.subscribe(x => this.currentUser = x);

  }

  ngOnInit(): void {

  }

  deconnexion(){
    this.authentificationService.logout();
    this.router.navigate(['/home']);
  }

}
