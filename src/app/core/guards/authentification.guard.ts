import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UtilisateurService} from '../services/utilisateur/utilisateur.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {

  constructor(private router: Router,
              private authentificationService: UtilisateurService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {

    const currentUser = this.authentificationService.currentUserValue;
    if (currentUser) {
      return true;
    } else {
    this.router.navigateByUrl('/login');
    return false;
    }
  }
}
