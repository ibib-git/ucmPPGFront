import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-inputs-errors',
  templateUrl: './inputs-errors.component.html',
  styleUrls: ['./inputs-errors.component.scss']
})
export class InputsErrorsComponent implements OnInit {

  @Input() formControlInput: any;

  messageError = 'coucou';
  constructor() { }

  ngOnInit(): void {
    this.messageError = this.selectNewInput(this.formControlInput);
  }

  selectNewInput(s: any) {
    if (s.getError('email')) {
      return 'Entrez une adresse mail correcte';
    }
    if (s.getError('required')) {
    return 'Ce champs est obligatoire';
  }
    if (s.getError('maxLength')) {
    return 'Entrez une valeur de moins de x caractères';
  }
    if (s.getError('minLength')) {
      return 'Entrez une valeur de minimum x caractères';
    }
}}
