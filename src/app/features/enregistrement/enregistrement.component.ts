import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {UtilisateurService} from '../../core/services/utilisateur.service';
import {UtilisateurEnregistrementModel} from '../../core/models/UtilisateurEnregistrementModel';
import {CustomValidators} from '../../shared/_validators/custom-validators';
import {ErreurModel} from '../../core/models/ErreurModel';
import {log} from 'util';

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
  errosModel: ErreurModel[];

  get form() {return this.userform.controls; }


  ngOnInit(): void {
    this.userform = new FormGroup( {
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
        CustomValidators.compare('motDePasse', 'checkPassword')
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
        (errorComplete) => {
          this.toastrServ.danger('Erreur dans l"enregistrement  ', 'Enregistrement', {[status]: 'danger'});
          console.log(errorComplete);
          // Dans le cas d'erreurs 500 ca signifie que ce n'est pas des erreurs prévue par le system et donc non controlées
          if (errorComplete.header.status < 500) {
            this.errosModel = errorComplete.error;
            this.errosModel.forEach(e => {
              this.toastrServ.danger(e.erreurMessage , e.nomDuChamps, {[status]: 'danger'});
            });
          }
          this.routServ.navigateByUrl('/register');
        },
        () => {},
    );
  }


}
