import { TestBed } from '@angular/core/testing';

import { ToDoData } from './to-do-data';

describe('ToDoData', () => {
  let service: ToDoData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToDoData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
