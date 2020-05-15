import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../../models/Utilisateur/UtilisateurEnregistrementModel';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {UtilisateurDetailsModel} from '../../models/Utilisateur/UtilisateurDetailsModel';
import {UtilisateurConnexionModel} from '../../models/Utilisateur/UtilisateurConnexionModel';
import { UtilisateurModel } from '../../models/Utilisateur/UtilisateurModel';
import {UtilisateurAuthentificationModel} from '../../models/Utilisateur/UtilisateurAuthentificationModel';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private currentUserSubject: BehaviorSubject<UtilisateurAuthentificationModel>;
  public currentUser: Observable<UtilisateurAuthentificationModel>;

  constructor(
      private httpClient: HttpClient
  ) {
    this.currentUserSubject = new BehaviorSubject<UtilisateurAuthentificationModel>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): UtilisateurAuthentificationModel {
    return this.currentUserSubject.value;
  }

  enregistrement(model: UtilisateurEnregistrementModel): Observable<UtilisateurDetailsModel> {
    return this.httpClient.post<UtilisateurDetailsModel>(environment.apiEndPoint + '/utilisateur/enregistrement', model);
  }

  login(model: UtilisateurConnexionModel): Observable<UtilisateurAuthentificationModel> {
    return this.httpClient.post<UtilisateurAuthentificationModel>(environment.apiEndPoint + '/utilisateur/connexion', model)
        .pipe(map(user => {
          // enregistre les info de l utilisateur et le token dans le local storage pour garder la connexion entre les refresh
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }));
  }

  getUtilisateur(id: bigint): Observable<UtilisateurModel> {
    return this.httpClient.get<UtilisateurModel>(environment.apiEndPoint + '/utilisateur/' + id);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
