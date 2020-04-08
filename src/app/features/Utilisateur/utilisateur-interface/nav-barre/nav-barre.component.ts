import { Component, OnInit, Input } from '@angular/core';
import { ParticipationDetailModel } from 'src/app/core/models/ParticipationDetailModel';
import { ProjetDetailModel } from 'src/app/core/models/ProjetDetailModel';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav-barre',
  templateUrl: './nav-barre.component.html',
  styleUrls: ['./nav-barre.component.scss']
})
export class NavBarreComponent implements OnInit {

  @Input() participations: ParticipationDetailModel[];
  
  constructor( private route : Router) { }

  ngOnInit(): void {
  }

  vue(projet: ProjetDetailModel){
    this.route.navigateByUrl('/dashboard/Workflow/' + projet.id);
  }
}
