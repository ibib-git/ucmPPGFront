import { Component, OnInit, Input } from '@angular/core';
import { ProjetDetailModel } from 'src/app/core/models/Projet/ProjetDetailModel';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {ParticipationModel} from '../../../../core/models/participation/ParticipationModel';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.scss']
})
export class NavBarreComponent implements OnInit {

  @Input() participations: ParticipationModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
