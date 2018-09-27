import { Component, OnInit, Input } from '@angular/core';
import { NewsRelease } from '../../_models/NewsRelease';

@Component({
  selector: 'app-topics-card',
  templateUrl: './topics-card.component.html',
  styleUrls: ['./topics-card.component.scss']
})
export class TopicsCardComponent implements OnInit {
  @Input() newsRelease: NewsRelease;

  constructor() { }

  ngOnInit() {
  }

}
