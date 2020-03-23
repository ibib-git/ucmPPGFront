import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NbToastRef, NbToastrService, NbGlobalPhysicalPosition } from '@nebular/theme';
import { GestionnaireErreurService } from '../services/gestionnaire-erreur.service';

@Injectable()
export class ErreursInterceptor implements HttpInterceptor {

  constructor(private toastrService:NbToastrService,private gestionnaireErreur:GestionnaireErreurService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let response=next.handle(request);

    response.subscribe(()=>{},
    (error:any)=>{
      const toastRef: NbToastRef = this.toastrService.show(
        this.gestionnaireErreur.getMessagePourCode(error.status),
        "Erreur "+error.status,
        {status:"danger",position:NbGlobalPhysicalPosition.BOTTOM_RIGHT});
    })

    return response;
  }
}
