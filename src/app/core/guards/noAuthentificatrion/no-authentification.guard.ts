import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UtilisateurService} from '../../services/utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthentificationGuard implements CanActivate {
  constructor(private router: Router,
              private authentificationService: UtilisateurService) {
  }

  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {

    const currentUser = this.authentificationService.currentUserValue;
    if (currentUser) {
      this.router.navigateByUrl('/home');
      return false;
    } else {
      return true;
    }
  }
}
