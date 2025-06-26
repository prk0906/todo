import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Welcomecomponent } from './welcomecomponent';

describe('Welcomecomponent', () => {
  let component: Welcomecomponent;
  let fixture: ComponentFixture<Welcomecomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Welcomecomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Welcomecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
