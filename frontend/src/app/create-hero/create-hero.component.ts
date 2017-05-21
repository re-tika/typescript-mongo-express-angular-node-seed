import { Component, OnInit } from '@angular/core';
import {ResourceService} from "../resource.service";
import {Hero} from "../hero";

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  constructor(private resourceService: ResourceService) { }

  ngOnInit() {
  }

  public newHeroName: string;

  public createHero() {

    const hero: Hero = {
      uid: undefined,
      name: "John Doe"
    };

    this.resourceService.createResource(hero, 'heroes').then(resp => {
      console.log(resp);
    });
  }

}
