import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireErreurService {

  private codeErreurVersMessage: {[code: number]: string} = {
    0: 'La Requête ne peut pas s\'envoyer',
    404: 'page non trouvée'
  };

  constructor() { }

  getMessagePourCode(code: number) {
    return this.codeErreurVersMessage[code] || 'erreur non documentée';
  }
}
