import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesClassification } from './heroes-classification';

describe('HeroesClassification', () => {
  let component: HeroesClassification;
  let fixture: ComponentFixture<HeroesClassification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesClassification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesClassification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
