import { Injectable } from '@angular/core';
import { HeroesBase } from '../heroes-base';
import { ListHeroes } from '../List-Heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  getHeroes(): Observable<HeroesBase[]> {
    const HeroesSelected = of(ListHeroes);
    return HeroesSelected
  }

  getHero(id: number): Observable<HeroesBase> {
    const hero = ListHeroes.find(h => h.id === id)!;
    return of(hero);
  }
}
