import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjetAjoutCollaborateurModel } from 'src/app/core/models/ProjetAjoutCollaborateurModel';
import { SupprimerCollaborateurModel } from 'src/app/core/models/SupprimerCollaborateurModel';

@Injectable({
  providedIn: 'root'
})
export class ModifierprojetService {

  constructor(private httpclient: HttpClient) { }

  public ajouterCollaborateur(model : ProjetAjoutCollaborateurModel) : Observable<boolean>{
    return this.httpclient.post<boolean>(environment.apiEndPoint + '/projet/ajoutCollaborateur' , model);
  }

  public supprimerCollaborateur(model : SupprimerCollaborateurModel) : Observable<boolean>{
    return this.httpclient.post<boolean>(environment.apiEndPoint + '/projet/supprimerCollaborateur', model);
  }

}
