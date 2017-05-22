import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-delete-hero',
  templateUrl: './delete-hero.component.html',
  styleUrls: ['./delete-hero.component.css']
})
export class DeleteHeroComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  @Input()
  hero: Hero;

  public deleteHero() {
    this.heroService.deleteHero(this.hero.uid).then(resp => {
      this.deleteHeroEvent.emit({
        value: this.hero.uid
      })
    });
  }

  @Output()
  deleteHeroEvent = new EventEmitter();

}
