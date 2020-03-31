import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserRegisterModel} from '../../../models/userRegisterModel';
import {Observable} from 'rxjs';
import {UserDetailsModel} from '../../../models/userDetailsModel';
import {environment} from '../../../../../environments/environment';
import {Projet} from '../../../models/Projet';

@Injectable({
  providedIn: 'root'
})
export class RecuperationProjetService {

  constructor(
      private httpClient: HttpClient) { }

  getProject(id: bigint): Observable<Projet> {
    return this.httpClient.get<Projet>(environment.apiEndPoint + '/projet/' + id);
  }
}
