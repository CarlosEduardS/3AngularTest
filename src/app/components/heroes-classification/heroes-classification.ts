import { Component } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';

@Component({
  selector: 'app-heroes-classification',
  imports: [],
  templateUrl: './heroes-classification.html',
  styleUrl: './heroes-classification.scss',
})
export class HeroesClassification {
  Hero: HeroesBase[] = []

  constructor(private heroesservices: HeroesService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroesservices.getHeroes()
      .subscribe(HeroesSelected => this.Hero = HeroesSelected.slice(0, 5));
  }
   
}
