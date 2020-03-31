import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from 'src/app/core/models/Utilisateur';
import { Projet } from 'src/app/core/models/Projet';

@Injectable({
  providedIn: 'root'
})
export class ModifierprojetService {

  constructor(private httpclient: HttpClient) { }

  public ajouterCollaborateur(model : string) : Observable<any>{
    return this.httpclient.post<any>(environment.projet + 'ajouterCollabo' , model)
  }

}
