import {Component, Input, OnInit} from '@angular/core';
import {EtapeWorkflowModel} from '../../../core/models/EtapeWorkflowModel';

@Component({
  selector: 'app-etape-workflow',
  templateUrl: './etape-workflow.component.html',
  styleUrls: ['./etape-workflow.component.scss']
})
export class EtapeWorkflowComponent implements OnInit {
  @Input() etape: EtapeWorkflowModel;

  allDetails: boolean;
  estProgression: boolean;
  constructor() { }

  ngOnInit(): void {
    this.estProgression = true;
    this.allDetails = false;
  }

  toggle(checked: boolean) {
    this.estProgression = checked;
  }

  clickAllDetails(clicked: boolean) {
    this.allDetails = clicked;
  }

}
