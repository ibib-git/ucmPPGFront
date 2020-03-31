import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserRegisterModel} from '../models/userRegisterModel';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {UserDetailsModel} from '../models/userDetailsModel';
import {UserLoginModel} from '../models/userLoginModel';


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

  login(model: UserLoginModel): Observable<UserDetailsModel> {
    return this.httpClient.post<UserDetailsModel>(environment.apiEndPoint + 'user/login', model);
  }
}
