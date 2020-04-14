import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UtilisateurConnexionModel} from '../../core/models/UtilisateurConnexionModel';
import {UtilisateurService} from '../../core/services/utilisateur.service';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-login',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  loginForm: FormGroup;
  userModel: UtilisateurConnexionModel;

  get form() {return this.loginForm.controls; }

  constructor(
      private userServ: UtilisateurService,
      private routServ: Router,
      private toastrServ: NbToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl(null, Validators.compose([
        Validators.email,
        Validators.required,
        Validators.maxLength(150),
      ])),
      motDePasse: new FormControl(null, Validators.compose([
        Validators.pattern('^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$'),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150),
      ])),
    });
  }

  onSubmit() {
    this.userModel = this.loginForm.value;

    this.userServ.login(this.userModel).subscribe(
        (model) => {
          this.toastrServ.success('Bonjour ' + model.pseudo, 'Connexion', {[status]: 'success'});
          this.routServ.navigateByUrl('/home');
        },
        () => {
          this.toastrServ.danger('Erreur de connexion ', 'Connexion', {[status]: 'danger'});
          this.routServ.navigateByUrl('/connexion');
        },
        () => {},
    );
  }

}
