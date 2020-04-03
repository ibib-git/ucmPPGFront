import {Component, Input, OnInit} from '@angular/core';
import {TacheModel} from '../../../../core/models/TacheModel';

@Component({
  selector: 'app-tache-etape-workflow',
  templateUrl: './tache-etape-workflow.component.html',
  styleUrls: ['./tache-etape-workflow.component.scss']
})
export class TacheEtapeWorkflowComponent implements OnInit {
  @Input() estDetail: boolean;
  @Input() estProgression: boolean;
  @Input() tache: TacheModel;

  constructor() { }

  ngOnInit(): void {
  }

  clickDetails(clicked: boolean)
  {
    this.estDetail = clicked;
  }

}
