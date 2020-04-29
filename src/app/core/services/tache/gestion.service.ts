import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TacheModel } from '../../models/TacheModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TacheCreationEnfantModel } from '../../models/TacheCreationEnfantModel';
import { TacheCreationModel } from '../../models/TacheCreationModel';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private httpClient: HttpClient) { }

  postTacheAjouter(tache : TacheCreationModel,idWorkflow: bigint) : Observable<TacheCreationModel>{
    return this.httpClient.post<TacheCreationModel>(environment.apiEndPoint+'/tache/'+idWorkflow+'/ajouterTacheParent', tache);
  }

  postTacheAjouterEnfant(idtacheParent: bigint, idWorkflow: bigint, tacheEnfant: TacheCreationEnfantModel) : Observable<TacheCreationEnfantModel>{
    return this.httpClient.post<TacheCreationEnfantModel>(environment.apiEndPoint+'/tache/'+idWorkflow+'/'+idtacheParent+'/ajouterTacheEnfant', tacheEnfant); 
  }

  getTache(id : bigint) : Observable<TacheModel> {
    return this.httpClient.get<TacheModel>(environment.apiEndPoint + "/tache/" + id);
  }
  
}
