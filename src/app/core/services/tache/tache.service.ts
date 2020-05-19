import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {OrdreEtapeModel} from '../../models/etape/OrdreEtapeModel';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ProjetModel} from '../../models/Projet/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  constructor(private httpClient: HttpClient) { }

  valider(idTache: bigint): Observable<ProjetModel> {
    return this.httpClient.get<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/valider');
  }

  assigner(idTache: bigint, idUtilisateurAssigne: bigint): Observable<ProjetModel> {
    return this.httpClient.post<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/assigner/', idUtilisateurAssigne);
  }

  congedier(idTache: bigint): Observable<ProjetModel> {
    return this.httpClient.get<ProjetModel>(environment.apiEndPoint + '/tache/' + idTache + '/congedier/');
  }
}
