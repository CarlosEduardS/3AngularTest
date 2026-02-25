import { Component } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-heroes-classification',
  imports: [RouterLink],
  templateUrl: './heroes-classification.html',
  styleUrl: './heroes-classification.scss',
})
export class HeroesClassification {
  readonly topHeroes;

  constructor(private heroesServices: HeroesService) {
    this.topHeroes  = this.heroesServices.getTopHeroes();
  }
}
