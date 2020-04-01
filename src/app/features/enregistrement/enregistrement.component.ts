import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {UtilisateurService} from '../../core/services/utilisateur.service';
import {UtilisateurEnregistrementModel} from '../../core/models/UtilisateurEnregistrementModel';
import {CustomValidators} from '../../shared/_validators/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './enregistrement.component.html',
  styleUrls: ['./enregistrement.component.scss']
})
export class EnregistrementComponent implements OnInit {

  constructor(
      private userServ: UtilisateurService,
      private routServ: Router,
      private toastrServ: NbToastrService,
  ) { }

  @Output() inputSelect: EventEmitter<any> = new EventEmitter<any>();

  userform: FormGroup;
  usermodel: UtilisateurEnregistrementModel;

  get form() {return this.userform.controls; }


  ngOnInit(): void {
    this.userform = new FormGroup( {
      email: new FormControl(null, Validators.compose([
          Validators.email,
          Validators.required,
          Validators.maxLength(150),
      ])),
      password: new FormControl(null, Validators.compose([
         Validators.pattern('^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$'),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150),
      ])),
      checkPassword: new FormControl(null, Validators.compose([
        Validators.pattern('^(?=.*[\\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\\w!@#$%^&*]{8,}$'),
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(150),
          ])),
      pseudo: new FormControl(null, Validators.compose([
      Validators.required,
      Validators.maxLength(255),
    ])),
      prenom: new FormControl(null, Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(255),
    ])),
      nom: new FormControl(null, Validators.compose([
          Validators.minLength(2),
      Validators.maxLength(255),
    ])),
      urlPhoto: new FormControl(null, Validators.compose([
      ])),
      infoSuppl: new FormControl(null, Validators.compose([
    ])),
      telephone: new FormControl(null, Validators.compose([
      Validators.maxLength(15),
        Validators.minLength(10),
        Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[0-9]*$')
    ]))
    }, Validators.compose([
        CustomValidators.compare('password', 'checkPassword')
    ]));
  }

  validate() {
    this.userform.removeControl('checkPassword');
    this.usermodel = this.userform.value;

    this.userServ.register(this.usermodel).subscribe(
        (model) => {
          this.toastrServ.success('Bienvenu chez PPG corporation ', 'Enregistrement', {[status]: 'success'});
          this.routServ.navigateByUrl('/home');
        },
        () => {
          this.toastrServ.danger('Erreur dans l"enregistrement ', 'Enregistrement', {[status]: 'danger'});
          this.routServ.navigateByUrl('/home');
        },
        () => {},
    );
  }


}
