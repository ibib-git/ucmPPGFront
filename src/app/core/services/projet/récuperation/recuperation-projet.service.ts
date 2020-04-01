import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../../../models/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {UtilisateurDetailsModel} from '../../../models/UtilisateurDetailsModel';
import {environment} from '../../../../../environments/environment';
import {ProjetModel} from '../../../models/ProjetModel';

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
