import { Injectable, signal, computed } from '@angular/core';
import { HeroesBase } from '../heroes-base';
import { ListHeroes } from '../List-Heroes';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class HeroesService {
  heroes = signal<HeroesBase[]>(ListHeroes);

  addHero(name:string, info:string, strengh:number) {
    const actual = this.heroes();
    const newHero: HeroesBase = {
      id: actual.length + 1,
      info,
      name,
      strengh
    };
    const newList = [...actual, newHero];
    this.heroes.set(newList);
    
    console.log("Novo herói adicionado:", newHero); 
    console.log("Lista atualizada:", newList); 
  }
  
  getHero(id: number) {
    return computed(() => this.heroes().find(h => h.id === id) ?? {
      id: 0,
      name: 'None',
      info: 'None',
      strengh: 0
    });
  }

  getHeroes() {
    return computed(() => 
      this.heroes()
        .sort((a, b) => a.id - b.id)
  );
  }

  getTopHeroes() { 
    return computed(() => 
      this.heroes()
        .sort((a, b) => b.strengh - a.strengh)
        .slice(0, 5)
    );
  }
}
