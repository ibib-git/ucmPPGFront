import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilisateurAjouter } from 'src/app/core/models/UtilisateurAjouter';
import { UtilisateurSupprimer } from 'src/app/core/models/UtilisateurSupprimer';

@Injectable({
  providedIn: 'root'
})
export class ModifierprojetService {

  constructor(private httpclient: HttpClient) { }

  public ajouterCollaborateur(model : UtilisateurAjouter) : Observable<UtilisateurAjouter>{
    return this.httpclient.post<UtilisateurAjouter>(environment.projet + '/ajoutCollaborateur' , model);
  }

  public supprimerCollaborateur(model : UtilisateurSupprimer) : Observable<UtilisateurSupprimer>{
    return this.httpclient.post<UtilisateurSupprimer>(environment.projet + '/supprimerCollaborateur', model);
  }

}
