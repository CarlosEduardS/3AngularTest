import { Component } from '@angular/core';
import { HeroesBase } from '../../heroes-base';
import { HeroesService } from '../../services/heroes-service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-heroes-classification',
  imports: [],
  templateUrl: './heroes-classification.html',
  styleUrl: './heroes-classification.scss',
})
export class HeroesClassification {
  heroes: HeroesBase[] = [];

  constructor(private heroesServices: HeroesService) {}

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe(lista => {
      this.heroes = [...lista]
        .sort((a, b) => b.strengh - a.strengh)
        .slice(0, 5);
    });
  }
}
