import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../models/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UtilisateurDetailsModel} from '../models/UtilisateurDetailsModel';
import {UtilisateurConnexionModel} from '../models/UtilisateurConnexionModel';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
      private httpClient: HttpClient
  ) { }

  register(model: UtilisateurEnregistrementModel): Observable<UtilisateurDetailsModel> {
    console.log('coucou');
    return this.httpClient.post<UtilisateurDetailsModel>(environment.apiEndPoint + 'user/enregistrement', model);
  }

  login(model: UtilisateurConnexionModel): Observable<UtilisateurDetailsModel> {
    return this.httpClient.post<UtilisateurDetailsModel>(environment.apiEndPoint + 'user/connexion', model);
  }
}
