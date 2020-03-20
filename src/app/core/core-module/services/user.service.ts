import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRegisterModel} from '../models/userRegisterModel';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private httpClient: HttpClient
  ) { }

  register(model: UserRegisterModel): Observable<string> {
    return this.httpClient.post<string>(environment.apiEndPoint + 'user/register', model);
  }
}
