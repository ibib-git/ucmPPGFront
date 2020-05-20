import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TacheCreationModel } from '../../models/etape/TacheCreationModel';
import { TacheSupprimerModel } from '../../models/tache/TacheSupprimerModel';
import { TacheModel } from '../../models/tache/TacheModel';

@Injectable({
  providedIn: 'root'
})
export class GestionTacheService {

  constructor(private httpClient: HttpClient) { }

  postTacheAjouter(tache : TacheCreationModel,idetapeDeGauche: bigint,idProjet: bigint) : Observable<TacheCreationModel>{
    return this.httpClient.post<TacheCreationModel>(environment.apiEndPoint+'/tache/'+idProjet+'/'+idetapeDeGauche+'/ajouterTacheParent', tache);
  }

  postTacheAjouterEnfant(idWorkflow: bigint, idProjet: bigint, idTache: bigint, tacheEnfant: TacheCreationModel) : Observable<TacheCreationModel>{
    return this.httpClient.post<TacheCreationModel>(environment.apiEndPoint+'/tache/'+idProjet+'/'+idWorkflow+'/'+idTache+'/ajouterTacheEnfant', tacheEnfant); 
  }

  getTache(id : bigint) : Observable<TacheModel> {
    return this.httpClient.get<TacheModel>(environment.apiEndPoint + "/tache/" + id);
  }

  postTacheSupprimer(idtache: bigint,tacheSupprimer: TacheSupprimerModel): Observable<TacheSupprimerModel>{
    return this.httpClient.post<TacheSupprimerModel>(environment.apiEndPoint+'/tache/'+idtache+'/supprimerTache',tacheSupprimer);
  }

  
}
