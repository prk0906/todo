import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoscomponent } from './list-todoscomponent';

describe('ListTodoscomponent', () => {
  let component: ListTodoscomponent;
  let fixture: ComponentFixture<ListTodoscomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTodoscomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTodoscomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
