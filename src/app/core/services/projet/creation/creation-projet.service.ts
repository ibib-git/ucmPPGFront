import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjetCreation } from 'src/app/core/models/projetCreation';

@Injectable({
  providedIn: 'root'
})
export class CreationProjetService {

  constructor(private Httpclient : HttpClient) { }

   // Renvoie un projet avec une liste de String (EMAIL) et un utilisateur
   creationP(projet : ProjetCreation) : Observable<ProjetCreation> {
    return this.Httpclient.post<ProjetCreation>(environment.creationProjet + '/enregistrementProjet', projet);
  }
}
