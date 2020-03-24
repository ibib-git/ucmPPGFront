import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRegisterModel} from '../models/userRegisterModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserDetailsModel} from '../models/userDetailsModel';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private httpClient: HttpClient
  ) { }

  register(model: UserRegisterModel): Observable<UserDetailsModel> {
    return this.httpClient.post<UserDetailsModel>(environment.apiEndPoint + 'user/register', model);
  }
}
