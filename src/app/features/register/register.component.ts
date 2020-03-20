import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {UserService} from '../../core/core-module/services/user.service';
import {UserRegisterModel} from '../../core/core-module/models/userRegisterModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userform: FormGroup;
  usermodel: UserRegisterModel;

  constructor(
      private userServ: UserService,
      private routServ: Router,
      private toastrServ: NbToastrService,
  ) { }

  ngOnInit(): void {
    this.userform = new FormGroup( {
      email: new FormControl(),
      password: new FormControl(),
      checkPassword: new FormControl(),
      prenom: new FormControl(),
      nom: new FormControl(),
      telephone: new FormControl()
    });
  }

  validate() {
    this.userform.removeControl('checkPassword');
    this.usermodel = this.userform.value;

    this.userServ.register(this.usermodel).subscribe(
        (model) => {
          this.toastrServ.success('Bienvenu chez PPG corporation ' + this.usermodel.prenom, 'Enregistrement', {[status]: 'success'});
        },
        () => {
          this.toastrServ.danger('Erreur dans l"enregistrement ', 'Enregistrement', {[status]: 'danger'});
        },
        () => {},
    );
    this.routServ.navigateByUrl('/home');
  }

}
