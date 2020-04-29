import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrdreEtapeModel} from '../../models/OrdreEtapeModel';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ProjetModel} from '../../models/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class ValiderTacheService {

  constructor(private httpClient: HttpClient) { }

  valider(idTache: bigint, idUtilisateur: bigint): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/valider', idUtilisateur);
  }
}
