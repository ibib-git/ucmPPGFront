import { Component, OnInit, Input } from '@angular/core';
import { ParticipationDetailModel } from 'src/app/core/models/ParticipationDetailModel';
import { ProjetDetailModel } from 'src/app/core/models/ProjetDetailModel';
import { RoleModel } from 'src/app/core/models/RoleModel';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.scss']
})
export class NavBarreComponent implements OnInit {

  @Input() participations: ParticipationDetailModel[];
  
  constructor() { }

  ngOnInit(): void {
  }
}
