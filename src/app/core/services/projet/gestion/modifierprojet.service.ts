import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilisateurAjouterModel } from 'src/app/core/models/UtilisateurAjouterModel';
import { UtilisateurSupprimerModel } from 'src/app/core/models/UtilisateurSupprimerModel';

@Injectable({
  providedIn: 'root'
})
export class ModifierprojetService {

  constructor(private httpclient: HttpClient) { }

  public ajouterCollaborateur(model : UtilisateurAjouterModel) : Observable<UtilisateurAjouterModel>{
    return this.httpclient.post<UtilisateurAjouterModel>(environment.apiEndPoint + '/projet/ajoutCollaborateur' , model);
  }

  public supprimerCollaborateur(model : UtilisateurSupprimerModel) : Observable<UtilisateurSupprimerModel>{
    return this.httpclient.post<UtilisateurSupprimerModel>(environment.apiEndPoint + '/projet/supprimerCollaborateur', model);
  }

}
