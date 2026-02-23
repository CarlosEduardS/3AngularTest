import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSelector } from './heroes-selector';

describe('HeroesSelector', () => {
  let component: HeroesSelector;
  let fixture: ComponentFixture<HeroesSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesSelector]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesSelector);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
