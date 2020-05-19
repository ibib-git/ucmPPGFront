import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../../../models/Utilisateur/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {UtilisateurDetailsModel} from '../../../models/Utilisateur/UtilisateurDetailsModel';
import {environment} from '../../../../../environments/environment';
import {ProjetModel} from '../../../models/Projet/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class RecuperationProjetService {

  constructor(
      private httpClient: HttpClient) { }

  getProject(id: bigint): Observable<ProjetModel> {
    return this.httpClient.get<ProjetModel>(environment.apiEndPoint + '/projet/' + id);
  }
}
