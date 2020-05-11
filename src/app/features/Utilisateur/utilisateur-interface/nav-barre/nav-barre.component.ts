import { Component, OnInit, Input } from '@angular/core';
import { ProjetDetailModel } from 'src/app/core/models/ProjetDetailModel';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import {ParticipationModel} from '../../../../core/models/ParticipationModel';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.scss']
})
export class NavBarreComponent implements OnInit {

  @Input() participations: ParticipationModel[];

  constructor( private route: Router) { }

  ngOnInit(): void {
  }

  vue(id: bigint) {
    this.route.navigateByUrl('/dashboard/Workflow/' + id);
  }
}
