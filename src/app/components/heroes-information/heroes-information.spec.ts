import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesInformation } from './heroes-information';

describe('HeroesInformation', () => {
  let component: HeroesInformation;
  let fixture: ComponentFixture<HeroesInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesInformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
