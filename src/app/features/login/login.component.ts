import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserLoginModel} from '../../core/models/userLoginModel';
import {UserService} from '../../core/services/user.service';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {UserDetailsModel} from '../../core/models/userDetailsModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  userModel: UserLoginModel;

  get form() {return this.loginForm.controls; }

  constructor(
      private userServ: UserService,
      private routServ: Router,
      private toastrServ: NbToastrService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
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
          this.routServ.navigateByUrl('/login');
        },
        () => {},
    );
  }

}
