import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrdreEtapeModel} from '../../models/OrdreEtapeModel';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ProjetModel} from '../../models/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }

  valider(idTache: bigint, idUtilisateur: bigint): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/valider', idUtilisateur);
  }

  // TODO TOKEN : idAssignateur = id du token
  assigner(idTache: bigint, idUtilisateurAssignateur: bigint, idUtilisateurAssigne: bigint): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/assigner/' + idUtilisateurAssignateur, idUtilisateurAssigne);
  }

  congedier(idTache: bigint, idUtilisateur: bigint): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/congedier/', idUtilisateur);
  }
}
