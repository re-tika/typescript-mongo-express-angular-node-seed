import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-display-hero',
  templateUrl: './display-hero.component.html',
  styleUrls: ['./display-hero.component.css']
})
export class DisplayHeroComponent implements OnInit {

  constructor() { }

  @Input()
  hero: Hero;

  ngOnInit() {
  }

  @Output()
  deleteHeroEvent = new EventEmitter();

  doDelete(evt) {
    this.deleteHeroEvent.emit(evt);
  }

}
