import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjetCreationModel } from 'src/app/core/models/Projet/ProjetCreationModel';

@Injectable({
  providedIn: 'root'
})
export class CreationProjetService {

  constructor(private Httpclient : HttpClient) { }

   // Renvoie un projet avec une liste de String (EMAIL) et un utilisateur
   creationP(projet : ProjetCreationModel) : Observable<ProjetCreationModel> {
    return this.Httpclient.post<ProjetCreationModel>(environment.apiEndPoint + '/projet/enregistrementProjet', projet);
  }
}
