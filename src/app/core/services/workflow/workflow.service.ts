import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilisateurEnregistrementModel} from '../../models/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {UtilisateurDetailsModel} from '../../models/UtilisateurDetailsModel';
import {environment} from '../../../../environments/environment';
import {OrdreEtapeModel} from '../../models/OrdreEtapeModel';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  constructor( private httpClient: HttpClient) { }

  changerOrdreEtape(id: bigint, model: OrdreEtapeModel): Observable<boolean> {
    return this.httpClient.patch<boolean>(environment.apiEndPoint + '/etape/' + id + '/ordre', model);
  }
}
