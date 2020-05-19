import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../../models/Utilisateur/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {UtilisateurDetailsModel} from '../../models/Utilisateur/UtilisateurDetailsModel';
import {environment} from '../../../../environments/environment';
import {OrdreEtapeModel} from '../../models/etape/OrdreEtapeModel';
import {ProjetModel} from '../../models/Projet/ProjetModel';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor( private httpClient: HttpClient) { }

  changerOrdreEtape(id: bigint, model: OrdreEtapeModel): Observable<ProjetModel> {
    return this.httpClient.patch<ProjetModel>(environment.apiEndPoint + '/etape/' + id + '/ordre', model);
  }
}
