import { Injectable } from '@angular/core';
import { HeroesBase } from '../heroes-base';
import { ListHeroes } from '../List-Heroes';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  private heroesSubject = new BehaviorSubject<HeroesBase[]>(ListHeroes);
  heroes$ = this.heroesSubject.asObservable();

  getHeroes(): Observable<HeroesBase[]> {
    return this.heroes$;
  }

  getHero(id: number): Observable<HeroesBase | undefined> {
    return this.heroes$.pipe(
      map(heroes => heroes.find(h => h.id === id))
    );
  }

  addHero(name:string, info:string, strengh:number): void {
    const actual = this.heroesSubject.value;
    const newHero: HeroesBase = {
      id: actual.length + 1,
      info,
      name,
      strengh
    };
    this.heroesSubject.next([...actual, newHero]);
  }
}
