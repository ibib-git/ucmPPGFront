import { Component, OnInit, Input } from '@angular/core';
import { ProjetDetailModel } from 'src/app/core/models/ProjetDetailModel';

@Component({
  selector: 'app-projet-nv',
  templateUrl: './projet-nv.component.html',
  styleUrls: ['./projet-nv.component.scss']
})
export class ProjetNvComponent implements OnInit {

  @Input() projet: ProjetDetailModel;

  constructor() { }

  ngOnInit(): void {
  }

}
