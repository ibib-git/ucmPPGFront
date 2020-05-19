import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
<<<<<<< HEAD
import {Observable} from 'rxjs';
=======
import {UtilisateurEnregistrementModel} from '../../../models/Utilisateur/UtilisateurEnregistrementModel';
import {Observable} from 'rxjs';
import {UtilisateurDetailsModel} from '../../../models/Utilisateur/UtilisateurDetailsModel';
>>>>>>> bd286a89b6dff2affb35100a2a6f5719b789be39
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
