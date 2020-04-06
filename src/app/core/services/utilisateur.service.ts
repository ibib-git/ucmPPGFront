import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../models/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UtilisateurDetailsModel} from '../models/UtilisateurDetailsModel';
import {UtilisateurConnexionModel} from '../models/UtilisateurConnexionModel';
import { UtilisateurModel } from '../models/UtilisateurModel';


@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(
      private httpClient: HttpClient
  ) { }

  enregistrement(model: UtilisateurEnregistrementModel): Observable<UtilisateurDetailsModel> {
    return this.httpClient.post<UtilisateurDetailsModel>(environment.apiEndPoint + 'utilisateur/enregistrement', model);
  }

  login(model: UtilisateurConnexionModel): Observable<UtilisateurDetailsModel> {
    return this.httpClient.post<UtilisateurDetailsModel>(environment.apiEndPoint + 'utilisateur/connexion', model);
  }

  recuperation(id: bigint) : Observable<UtilisateurModel>{
    console.log("Test")
    return this.httpClient.get<UtilisateurModel>(environment.apiEndPoint + 'utilisateur/'+ id);
  }
}
