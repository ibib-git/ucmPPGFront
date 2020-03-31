import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UtilisateurAjouter } from 'src/app/core/models/UtilisateurAjouter';

@Injectable({
  providedIn: 'root'
})
export class ModifierprojetService {

  constructor(private httpclient: HttpClient) { }

  public ajouterCollaborateur(model : UtilisateurAjouter) : Observable<UtilisateurAjouter>{
    console.log(".txt")
    return this.httpclient.post<UtilisateurAjouter>(environment.projet + 'ajoutCollaborateur' , model)
  }

}
