import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {UserService} from '../../core/services/user.service';
import {UserRegisterModel} from '../../core/models/userRegisterModel';

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
      email: new FormControl(null, Validators.compose([
          Validators.email,
          Validators.required,
          Validators.maxLength(150)
      ])),
      password: new FormControl(null, Validators.compose([
          Validators.pattern(''),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150)
      ])),
      checkPassword: new FormControl(null, Validators.compose([
        Validators.pattern(''),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(255)
          ])),
      pseudo: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.maxLength(255)
    ])),
      prenom: new FormControl(null, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(255)
    ])),
      nom: new FormControl(null, Validators.compose([
          Validators.minLength(2),
      Validators.maxLength(255)
    ])),
      infoSuppl: new FormControl(null, Validators.compose([
    ])),
      telephone: new FormControl(null, Validators.compose([
      Validators.maxLength(15),
          Validators.pattern('')
    ]))
    }, Validators.compose([

    ]));
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
